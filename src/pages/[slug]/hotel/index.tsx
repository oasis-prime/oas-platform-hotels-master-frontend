import { AppConfig, AppHotelbeds } from '@utils/app.config'
import { FormProvider, useForm } from 'react-hook-form'
import { GetServerSideProps, GetStaticPaths, NextPage } from 'next'
import { HotelDescriptionCard, HotelFacilitiesCard, HotelRoomCard } from '@components/hotels/card'
import { Trans, useTranslation } from 'next-i18next'
import { getCheckIn, getCheckOut, parseDate, toISOLocal } from '@utils/func'
import { useEffect, useState } from 'react'

import { IHotelsDetailSearch } from '@model/hotel-search'
import Image from 'next/image'
import { LanguageEnum } from '__generated__/globalTypes'
import { MainLoading } from '@components/misc/loading/main.loading'
import { TopBarSearch } from '@components/search/topbar.search'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useAvailability } from '@graphql/services/availability'
import { useHotel } from '@graphql/services/hotels'
import { useRouter } from 'next/router'

const HotelDescription: NextPage = () => {
  const { t } = useTranslation()
  const methods = useForm<IHotelsDetailSearch>()

  const { getValues, reset } = methods

  const router = useRouter()
  const { locale } = router

  const [hotelQuery, { data: hotelData, loading: hotelLoading }] = useHotel()
  const [availabilityQuery, { data: availabilityData, loading: availabilityLoading }] = useAvailability()

  const [roomCount, setRoomCount] = useState(0)
  const [rateCount, setRateCount] = useState(0)


  const handlerQuery = () => {
    const query = getValues()
    availabilityQuery({
      variables: {
        input: {
          hotels: {
            hotel: [query.code],
          },
          language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
          occupancies: [{ adults: query.adults, children: 0, rooms: query.rooms }],
          stay: {
            checkIn: toISOLocal(query.checkIn).slice(0, 10),
            checkOut: toISOLocal(query.checkOut).slice(0, 10),
          },
        },
      },
      onCompleted: (data) => {
        const availability = data.getAvailability.availability?.[0]
        const roomCode = availability?.rooms?.map(i => i?.code as string) || []
        hotelQuery({
          variables: {
            hotelInput: {
              code: query.code,
              language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
            },
            hotelRoomsInput: {
              roomCode: roomCode,
              language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
            },
            hotelFacilitiesInput: {
              language: locale === 'th' ? LanguageEnum.TAI : LanguageEnum.ENG,
              limit: 20,
              offset: 0,
              groupCode: 70,
            },
          },
        })
      },
    })


  }

  useEffect(() => {
    if (router.isReady) {
      console.log(router.query)
      const code = router.query.code as string
      const adults = router.query.adults as string
      const checkOut = router.query.checkOut && parseDate(router.query.checkOut as string)
      const checkIn = router.query.checkIn && getCheckIn(parseDate(router.query.checkIn as string)) || getCheckIn(new Date())
      const children = router.query.children as string
      const rooms = router.query.rooms as string

      reset({
        code: code && parseInt(code) || 1,
        adults: adults && parseInt(adults) || 1,
        checkIn: checkIn && getCheckIn(checkIn),
        checkOut: checkOut && getCheckOut(checkOut, checkIn) || getCheckOut(new Date(), new Date()),
        children: children && parseInt(children) || 0,
        rooms: rooms && parseInt(rooms) || 1,
      })

      handlerQuery()
    }
  }, [router])

  useEffect(() => {
    if (hotelData != null) {
      const c = availabilityData?.getAvailability?.availability?.[0]

      let r = 0
      let a = 0
      c?.rooms?.map((v) => {
        const data = hotelData?.getHotel?.rooms?.find((f) => {
          if (f?.roomCode === v?.code) {
            return true
          }
        })

        if (data) {
          r++
          a += v?.rates?.length || 0
        }
      })

      setRoomCount(r)
      setRateCount(a)
    }
  }, [hotelData])

  if (availabilityData == null && availabilityLoading == true) {
    return (
      <MainLoading />
    )
  }



  return (
    <FormProvider {...methods}>
      <div className="grid gap-2">
        <div className={classNames(
          'bg-primary w-full',
          'px-4',
          'p-4',
        )}
        >
          <div className="max-w-screen-xl mx-auto">
            <TopBarSearch screen="detail" />
          </div>
        </div>
        { /* Bar */ }
        <div>
          <nav className="rounded-md w-full">
            <ol className="list-reset flex max-w-screen-xl mx-auto">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700"
                >Home</a></li>
              <li><span className="text-gray-500 mx-2">&gt;</span></li>
              <li className="text-gray-500">{ router.query.slug }</li>
            </ol>
          </nav>
        </div>
        { /* รูปภาพ */ }
        <div>
          <div className="md:h-96 max-w-screen-xl mx-auto grid grid-cols-10 md:grid-rows-2 gap-2">
            { [1, 2, 3, 4, 5, 6, 7].map((v, i, row) => {
              if (hotelData?.getHotel.images?.[i]?.path != null)
                return (
                  <div
                    key={v}
                    className={classNames(
                      'h-64 md:h-auto overflow-hidden relative',
                      i == 0 ? 'col-span-5 md:col-span-4' : 'col-span-5 md:col-span-2',
                      i == 0 ? 'row-span-1 md:row-span-2' : 'md:row-span-1',
                    )}
                  >
                    <Image
                      unoptimized
                      placeholder="blur"
                      blurDataURL={AppHotelbeds.standard + hotelData?.getHotel.images?.[i]?.path || ''}
                      src={AppHotelbeds.standard + hotelData?.getHotel.images?.[i]?.path || ''}
                      alt=""
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                    />
                  </div>
                )
            }) }
          </div>
        </div>
        { /* ลิงค์ */ }
        <div className="md:h-14">
          <div className={classNames(
            'max-w-screen-xl mx-auto',
            'rounded-md border border-gray-200',
            'grid md:grid-cols-3 px-4',
          )}
          >
            <div className="md:col-span-2 flex gap-4 items-center">
              <div>{ t('hotel:details') }</div>
              <div>{ t('hotel:room') }</div>
              <div>{ t('hotel:facilities') }</div>
              <div>{ t('hotel:location') }</div>
              <div>{ t('hotel:policy') }</div>
            </div>
            <div className="md:col-span-1 flex items-center justify-end">
              <div>{ t('hotel:costStartAt') } <span className="text-red-500 text-xl">฿ { availabilityData?.getAvailability?.availability?.[0]?.minRate }</span></div>
            </div>
          </div>
        </div>
        { /* ดีเทล */ }
        <div className="grid gap-2">
          <div className={classNames(
            'max-w-screen-xl mx-auto',
            'rounded-md',
            'grid grid-cols-12 gap-2',
            'items-start',
          )}
          >
            <div className="col-span-12 md:col-span-9 grid gap-2">
              <HotelDescriptionCard data={hotelData?.getHotel} />
              <HotelFacilitiesCard data={hotelData?.getHotel.facilities || []} />
            </div>
            <div className="col-span-12 md:col-span-3 grid gap-2">
              <div className="border border-gray-20 p-4 flex gap-4">
                <div className="w-8 p-8 bg-primary rounded-full rounded-br-none relative">
                  <div className="absolute text-xl text-white top-[50%] left-[50%] translate-y-[-50%] translate-x-[-40%]">6.8</div>
                </div>
                <div className="text-2xl">ดี</div>
              </div>
              <div className="border border-gray-20 p-4 grid gap-4 divide-y">
                <div className="relative h-32">
                  <div className="absolute w-full h-32 rounded-md file:border border-gray-400 shadow-sm">
                    <Image
                      unoptimized
                      placeholder="blur"
                      blurDataURL="/images/main/search-on-map.jpeg"
                      src="/images/main/search-on-map.jpeg"
                      alt="search-map"
                      layout="fill"
                      objectFit="cover"
                      className="rounded-md"
                      width={100}
                      height={100}
                    />
                    <div className="w-full h-full absolute flex flex-wrap justify-center content-end">
                      <div className="text-gray-800 text-xl py-2">{ t('hotel:location') }</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex gap-4 items-center">
                  <i className="bi bi-car-front"></i>
                  <div>{ t('hotel:parking') }</div>
                  { hotelData?.getHotel.facilities?.find((v, i) => {
                    if (v?.facilityCode === 500 || v?.facilityCode === 560 || v?.facilityCode === 320) {
                      return true
                    } else {
                      return false
                    }
                  }) ? (
                      <span className="flex h-3 w-3">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-green-600"></span>
                      </span>
                    ) : (
                      <span className="flex h-3 w-3">
                        <span className="relative inline-flex rounded-full h-3 w-3 bg-red-600"></span>
                      </span>
                    ) }
                </div>

                <div className="pt-3">
                  <div>{ t('hotel:popular') }</div>
                  { hotelData?.getHotel.interestPoints?.map((v, i) => (
                    <div
                      key={`interestPoints-${i}`}
                    >
                      { v?.poiName }
                    </div>
                  )) }
                </div>

                <div className="pt-3">
                  <div>{ t('hotel:near') }</div>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div className="max-w-screen-xl mx-auto grid gap-2">
              <div className="text-2xl">{ t('hotel:roomType') }</div>
              <div className="bg-gray-200 w-full h-[0.5px]"></div>
              <div>
                <div>
                  <Trans
                    i18nKey="hotel:typeOffer"
                    t={t}
                    values={{ type: roomCount, offer: rateCount }}
                  />
                </div>
                { /* {t('hotel:typeOffer', {
                  type: roomCount, offer: rateCount
                })} */ }
                <div className="text-xs text-gray-300">{ t('hotel:taxes') }</div>
              </div>
              { /* <HotelCardEmpty /> */ }
              { availabilityData?.getAvailability?.availability?.[0] &&
                availabilityData?.getAvailability.availability?.[0].rooms?.map((v, i) => {
                  const data = hotelData?.getHotel?.rooms?.find((f) => {
                    if (f?.roomCode === v?.code) {
                      console.log(v?.code, f?.roomCode)
                      return true
                    }
                  })

                  if (data) {
                    return (
                      <HotelRoomCard
                        key={`hotel-rooms-${v?.code}`}
                        data={data}
                        availability={v}
                      />
                    )
                  }
                }) }
            </div>
          </div>
        </div>
      </div>
    </FormProvider>
  )
}


export const getServerSideProps: GetServerSideProps = async ({ req, res, locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [...AppConfig.default_translations, 'hotel'])),
    },
  }
}


export default HotelDescription