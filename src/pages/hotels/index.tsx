import { FormProvider, useForm } from 'react-hook-form'
import { getCheckIn, getCheckOut, parseDate, toISOLocal } from '@utils/func'
import { useEffect, useState } from 'react'

import { HotelCardMain } from '@components/hotels/card'
import { HotelsFilter } from '@components/hotels/filter'
import { IHotelsSearch } from '@model/hotel-search'
import { LanguageEnum } from '__generated__/globalTypes'
import { Modal } from '@components/misc/modal'
import type { NextPage } from 'next'
import { TopBarSearch } from '@components/search/topbar.search'
import classNames from 'classnames'
import { useAvailability } from '@graphql/services/availability'
import { useHotels } from '@graphql/services/hotels'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const HotelsPage: NextPage = () => {
  const router = useRouter()
  const [hotelsQuery, { data: hotelsData, loading: hotelsLoading }] = useHotels()
  const [availabilityQuery, { data: availabilityData, loading: availabilityLoading }] = useAvailability()

  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const methods = useForm<IHotelsSearch>()

  const { getValues, reset } = methods

  const handlerOnClose = () => {
    setOpen(false)
  }

  const handlerQuery = () => {
    console.log('handlerQueryA')
    const query = getValues()

    hotelsQuery({
      variables: {
        hotelsInput: {
          occupancies: {
            adults: query.adults,
            children: query.children,
            rooms: query.rooms,
          },
          keywords: {
            keyword: [query.name],
          },
          language: LanguageEnum.TAI,
          pagination: {
            page: 1,
            pageSize: 20,
          },

        },
      },
      onCompleted: (data) => {
        const hotelIds = data?.getHotels?.hotels?.map(v => v?.code as number) || []
        availabilityQuery({
          variables: {
            input: {
              hotels: {
                hotel: hotelIds,
              },
              language: LanguageEnum.TAI,
              occupancies: [{ adults: query.adults, children: query.children, rooms: query.rooms }],
              stay: {
                checkIn: toISOLocal(query.checkIn).slice(0, 10),
                checkOut: toISOLocal(query.checkOut).slice(0, 10),
              },
            },
          },
        })
      },
    })
  }

  useEffect(() => {
    // if (router.isReady) {

    // }
  }, [router.query])

  useEffect(() => {
    if (router.isReady) {
      reset({
        adults: router.query.adults && parseInt(router.query.adults as string) || 1,
        checkIn: router.query.checkIn &&
        getCheckIn(parseDate(router.query.checkIn as string)) ||
        getCheckIn(new Date()),
        checkOut: router.query.checkOut &&
        getCheckOut(parseDate(router.query.checkOut as string), parseDate(router.query.checkIn as string)) ||
        getCheckOut(new Date(), new Date()),
        children: router.query.children && parseInt(router.query.children as string) || 0,
        name: router.query.name && router.query.name as string || '',
        rooms: router.query.rooms && parseInt(router.query.rooms as string) || 1,
      })

      handlerQuery()
    }
  }, [router])

  return (
    <FormProvider {...methods} >
      <div>
        <div className={classNames(
          'bg-primary h-16 w-full',
          'px-4',
        )}
        >
          <div className="max-w-screen-xl mx-auto">
            <TopBarSearch />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-2 px-4">
          <div className="grid gap-2">
            <div className="grid gap-4 grid-cols-12 px-2">
              <p className="text-2xl col-span-3">
              แค่<span className="text-primary">คลิก</span> แล้ว<span className="text-primary">ไป</span>
              </p>
              <div className="col-span-9 flex gap-4 justify-between">
                <p>เรียงตาม</p>
                <i
                  className="bi bi-filter-circle text-2xl cursor-pointer xl:hidden"
                  onClick={() => {
                    setOpen(!open)
                  }}
                ></i>
              </div>
            </div>
            <div className="grid grid-cols-12 gap-4">
              <div className={classNames(
                'min-h-md transition w-full',
                'col-span-12 xl:col-span-3 hidden xl:block',
                'ease-in-out delay-150',
              )}
              >
                <HotelsFilter />
              </div>
              <div className="min-h-md col-span-12 xl:col-span-9 w-full gap-4 grid">
                { hotelsData?.getHotels.hotels.map((h, v) => (
                  <HotelCardMain
                    key={h.code}
                    h={h}
                    a={availabilityData?.getAvailability.availability.find(f => f.code === h.code)}
                    aLoading={availabilityLoading}
                  />
                )) }

              </div>
            </div>
          </div>
        </div>
      </div>
      <Modal
        isOpen={open}
        onClose={handlerOnClose}
      >
        <div className={classNames(
          'md:max-w-md',
        )}
        >
          <HotelsFilter />
        </div>
      </Modal>
    </FormProvider>
  )
}


export default HotelsPage
