import { FormProvider, useForm } from 'react-hook-form'
import type { GetStaticProps, NextPage } from 'next'
import { getCheckIn, getCheckOut, parseDate, toISOLocal } from '@utils/func'
import { useEffect, useState } from 'react'

import { AppConfig } from '@utils/app.config'
import { HotelCardMain } from '@components/hotels/card'
import { HotelsFilter } from '@components/hotels/filter'
import { IHotelsSearch } from '@model/hotel-search'
import { LanguageEnum } from '__generated__/globalTypes'
import { MainLoading } from '@components/misc/loading/main.loading'
import { Modal } from '@components/misc/modal'
import { TopBarSearch } from '@components/search/topbar.search'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useAvailability } from '@graphql/services/availability'
import { useHotels } from '@graphql/services/hotels'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const HotelsPage: NextPage = () => {
  const router = useRouter()
  const { locale } = router
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
    const query = getValues()
    const keywords = query.name && { keyword: [query.name] } || undefined
    const geolocation = query.latitude && query.longitude && {
      latitude: query.latitude,
      longitude: query.longitude,
      radius: 30,
    } || undefined
    hotelsQuery({
      variables: {
        hotelsInput: {
          occupancies: {
            adults: query.adults,
            children: query.children,
            rooms: query.rooms,
          },
          keywords: keywords,
          geolocation: geolocation,
          language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
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
              language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
              occupancies: [{ adults: query.adults, children: 0, rooms: query.rooms }],
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
    if (router.isReady) {
      const name = router.query.name && router.query.name as string || ''
      const adults = router.query.adults as string
      const checkOut = router.query.checkOut && parseDate(router.query.checkOut as string)
      const checkIn = router.query.checkIn && getCheckIn(parseDate(router.query.checkIn as string)) || getCheckIn(new Date())
      const children = router.query.children as string
      const rooms = router.query.rooms as string

      reset({
        name: name,
        adults: adults && parseInt(adults) || 1,
        checkIn: checkIn && getCheckIn(checkIn) || getCheckIn(new Date()),
        checkOut: checkOut && getCheckOut(checkOut, checkIn) || getCheckOut(new Date(), new Date()),
        children: children && parseInt(children) || 0,
        rooms: rooms && parseInt(rooms) || 1,
      })

      handlerQuery()
    }
  }, [router])

  if (hotelsData == null && hotelsLoading == true)
    return (<MainLoading />)

  return (
    <FormProvider {...methods} >
      <div>
        <div className={classNames(
          'bg-primary w-full',
          'px-4',
          'p-4',
        )}
        >
          <div className="max-w-screen-xl mx-auto">
            <TopBarSearch screen="search" />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-2 px-4">
          <div className="grid gap-2">
            <div className="grid gap-4 grid-cols-12 px-2">
              <p className="text-2xl col-span-3">
              แค่<span className="text-primary">คลิก</span> แล้ว<span className="text-primary">ไป</span>
              </p>
              <div className="col-span-9 flex gap-4 justify-between">
                <p>{ t('hotels:sortBy') }</p>
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

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...AppConfig.default_translations,
        'hotels',
      ])),
    },
  }
}

export default HotelsPage
