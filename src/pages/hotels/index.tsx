import { FormProvider, useForm } from 'react-hook-form'
import type { GetStaticProps, NextPage } from 'next'
import { useEffect, useState } from 'react'

import { AppConfig } from '@utils/app.config'
import { HotelCardMain } from '@components/hotels/card'
import { HotelsFilter } from '@components/hotels/filter'
import { IHotelsSearch } from '@model/hotel-search'
import { LanguageEnum } from '__generated__/globalTypes'
import { TopBarSearch } from '@components/search/topbar.search'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useHotels } from '@graphql/services/hotels'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

const HotelsPage: NextPage = () => {
  const router = useRouter()
  const [hotelsQuery, { data, loading }] = useHotels()

  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const methods = useForm<IHotelsSearch>({
    defaultValues: {
      adults: router.query.adults && parseInt(router.query.adults as string) || 1,
      checkIn: router.query.checkIn && new Date(router.query.checkIn as string) || new Date(),
      checkOut: router.query.checkOut && new Date(router.query.checkIn as string) || new Date(),
      children: router.query.children && parseInt(router.query.adults as string) || 0,
      name: router.query.name && router.query.name as string || '',
      rooms: router.query.rooms && parseInt(router.query.rooms as string) || 1,
    },
  })

  const { getValues } = methods

  const handlerQuery = () => {
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
    })
  }

  useEffect(() => {
    if (router.isReady) {
      handlerQuery()
    }
  }, [router.isReady])

  return (
    <FormProvider {...methods} >
      <div>
        <div className={classNames(
          'bg-primary h-16 w-full',
        )}
        >
          <div className="max-w-screen-xl mx-auto">
            <TopBarSearch />
          </div>
        </div>
        <div className="max-w-screen-xl mx-auto mt-2">
          <div className="grid gap-2">
            <div className="grid gap-4 grid-cols-12">
              <p className="text-2xl col-span-3">
              แค่<span className="text-primary">คลิก</span> แล้ว<span className="text-primary">ไป</span>
              </p>
              <div className="col-span-9">
                <p>เรียงตาม</p>
              </div>
            </div>
            <div className="">
              <div className="grid grid-cols-12 gap-4">
                <div className={classNames(
                  'min-h-md transition w-full',
                  'col-span-12 xl:col-span-3',
                  'ease-in-out delay-150',
                )}
                >
                  <HotelsFilter />
                </div>
                <div className="min-h-md col-span-9 w-full gap-4 grid">
                  { data?.getHotels.hotels.map((h, v) => (
                    <HotelCardMain
                      key={h.code}
                      data={h}
                    />
                  )) }

                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}


export default HotelsPage
