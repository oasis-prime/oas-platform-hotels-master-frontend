import { GetStaticPaths, GetStaticProps, NextPage } from 'next'
import { HotelDescriptionCard, HotelFacilitiesCard, HotelRoomCard } from '@components/hotels/card'
import { getCheckIn, getCheckOut, parseDate, toISOLocal } from '@utils/func'
import { useHotel, useHotels } from '@graphql/services/hotels'

import { AppConfig, AppHotelbeds } from '@utils/app.config'
import { IHotelsDetailSearch } from '@model/hotel-search'
import Image from 'next/image'
import { LanguageEnum } from '__generated__/globalTypes'
import { MainLoading } from '@components/misc/loading/main.loading'
import { TopBarSearch } from '@components/search/topbar.search'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useAvailability } from '@graphql/services/availability'
import { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { useRouter } from 'next/router'

const HotelDescription: NextPage = () => {
  const methods = useForm<IHotelsDetailSearch>()

  const { getValues, reset } = methods

  const router = useRouter()
  const [hotelQuery, { data: hotelData, loading: hotelLoading }] = useHotel()
  const [availabilityQuery, { data: availabilityData, loading: availabilityLoading }] = useAvailability()


  const handlerQuery = () => {
    const query = getValues()

    hotelQuery({
      variables: {
        hotelInput: {
          code: query.code,
          language: LanguageEnum.TAI,
        },
      },
      onCompleted: (data) => {
        const hotelIds = data?.getHotel.code

        if (hotelIds == null) {
          return
        }

        availabilityQuery({
          variables: {
            input: {
              hotels: {
                hotel: [hotelIds],
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
    if (router.isReady) {
      const code = router.query.code as string
      const adults = router.query.adults as string
      const checkOut = router.query.checkOut && parseDate(router.query.checkOut as string)
      const checkIn = router.query.checkIn && getCheckIn(parseDate(router.query.checkIn as string)) || getCheckIn(new Date())
      const children = router.query.children as string
      const rooms = router.query.rooms as string

      reset({
        code: code && parseInt(code) || 1,
        adults: adults && parseInt(adults) || 1,
        checkIn: checkIn && getCheckIn(checkIn) || getCheckIn(new Date()),
        checkOut: checkOut && getCheckOut(checkOut, checkIn) || getCheckOut(new Date(), new Date()),
        children: children && parseInt(children) || 0,
        rooms: rooms && parseInt(rooms) || 1,
      })

      handlerQuery()
    }
  }, [router])

  if (hotelData == null && hotelLoading == true)
    return (<MainLoading />)

  return (
    <>
      <div className="grid gap-2">
        <div className={classNames(
          'bg-primary h-16 w-full',
        )}
        >
          <div className="max-w-screen-xl mx-auto">
            <TopBarSearch />
          </div>
        </div>
        { /* Bar */}
        <div>
          <nav className="rounded-md w-full">
            <ol className="list-reset flex max-w-screen-xl mx-auto">
              <li>
                <a
                  href="#"
                  className="text-blue-600 hover:text-blue-700"
                >Home</a></li>
              <li><span className="text-gray-500 mx-2">&gt;</span></li>
              <li className="text-gray-500">Library</li>
            </ol>
          </nav>
        </div>
        { /* รูปภาพ */}
        <div>
          <div className="h-96 max-w-screen-xl mx-auto grid grid-cols-10 grid-rows-2 gap-2">
            {[1, 2, 3, 4, 5, 6, 7].map((v, i, row) => (
              <div
                key={v}
                className={classNames(
                  'h-full overflow-hidden relative',
                  i == 0 ? 'col-span-4' : 'col-span-2',
                  i == 0 ? 'row-span-2' : 'row-span-1',
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
            ))}
          </div>
        </div>
        { /* ลิงค์ */}
        <div className="h-14">
          <div className={classNames(
            'h-14 max-w-screen-xl mx-auto',
            'rounded-md border border-gray-200',
            'grid grid-cols-3 px-4',
          )}
          >
            <div className="col-span-2 flex gap-4 items-center">
              <div>รายละเอียดที่พัก</div>
              <div>ห้องพัก</div>
              <div>สิ่งอำนวยความสะดวก</div>
              <div>ตำแหน่งที่ตั้ง</div>
              <div>นโยบายที่พัก</div>
            </div>
            <div className="col-span-1 flex items-center justify-end">
              <div>เริ่มต้นที่ <span className="text-red-500 text-xl">฿ 524</span></div>
            </div>
          </div>
        </div>
        { /* ดีเทล */}
        <div className="grid gap-2">
          <div className={classNames(
            'max-w-screen-xl mx-auto',
            'rounded-md',
            'grid grid-cols-12 gap-2',
            'items-start',
          )}
          >
            <div className="col-span-9 grid gap-2">
              <HotelDescriptionCard data={hotelData?.getHotel} />
              <HotelFacilitiesCard data={hotelData?.getHotel.facilities || []} />
            </div>
            <div className="col-span-3 grid gap-2">
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
                      <div className="text-gray-800 text-xl py-2">ดูที่พัก</div>
                    </div>
                  </div>
                </div>

                <div className="pt-3 flex gap-4">
                  <i className="bi bi-car-front"></i>
                  <div>ที่จอดรถ</div>
                </div>

                <div className="pt-3">
                  <div>ที่เที่ยวยอดนิยม</div>
                </div>

                <div className="pt-3">
                  <div>ที่เที่ยวใกล้ที่พัก</div>
                </div>
              </div>
            </div>

          </div>
          <div>
            <div className="max-w-screen-xl mx-auto grid gap-2">
              <div className="text-2xl">ประเภทห้อง</div>
              <div className="bg-gray-200 w-full h-[0.5px]"></div>
              <div>
                <div>ห้องพัก 6 ประเภท | ข้อเสนอห้องพัก 17 ข้อเสนอ</div>
                <div className="text-xs text-gray-300">ราคาไม่รวมภาษีและค่าธรรมเนียม</div>
              </div>
              { /* <HotelCardEmpty /> */}
              {hotelData?.getHotel.rooms?.map((v, i) => (
                <HotelRoomCard
                  key={`hotel-rooms-${i}`}
                  data={v} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
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

export const getStaticPaths: GetStaticPaths<{ slug: string }> = async () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}


export default HotelDescription