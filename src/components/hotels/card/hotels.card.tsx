import { getCalculatorDays, makeSlug, toISOLocal } from '@utils/func'
import { useEffect, useState } from 'react'

import { AppHotelbeds } from '@utils/app.config'
import { AvailabilitySearch_getAvailability_availability } from '@graphql/services/__generated__/AvailabilitySearch'
import { Button } from '@components/misc/button'
import { HotelSearch_getHotels_hotels } from '@graphql/services/__generated__/HotelSearch'
import { IHotelsSearch } from '@model/hotel-search'
import Image from 'next/image'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/router'

// type IHotelFacilities = {
//   code: number
//   name: string
// }

// const DEFAULT_HOTEL_FACILITIES: IHotelFacilities[] = [
//   { code: 1, name: 'นำสัตว์เลี้ยงเข้าพักได้' },
//   { code: 1, name: 'ที่จอดรถ' },
//   { code: 1, name: 'Wi-Fi ทุกห้อง (ฟรี)' },
//   { code: 1, name: 'บริการเช็คอิน/เช็คเอาต์แบบไร้การสัมผัส' },
//   { code: 1, name: 'บาร์' },
//   { code: 1, name: 'ห้องอาหาร' },
//   { code: 1, name: 'รูมเซอร์วิส' },
//   { code: 1, name: 'Wi-Fi ในพื้นที่สาธารณะ' },
// ]

type IHotelCardMain = {
  readonly h: HotelSearch_getHotels_hotels
  readonly a?: AvailabilitySearch_getAvailability_availability
  readonly aLoading: boolean
}

const HotelCardMain = (prop: IHotelCardMain) => {
  const { getValues } = useFormContext<IHotelsSearch>()

  const [numberOfDays, setNumberOfDays] = useState('0')
  // const [hotelFacilities, setHotelFacilities] = useState(DEFAULT_HOTEL_FACILITIES)

  const router = useRouter()

  const handleOnClick = () => {
    router.push(`${makeSlug(prop.h.hotelName || '')}/hotel`, {
      pathname: `${makeSlug(prop.h.hotelName || '')}/hotel`,
      query: {
        code: prop.h.code,
        type: prop.h.type,
        name: getValues('name'),
        adults: getValues('adults'),
        children: getValues('children'),
        rooms: getValues('rooms'),
        checkIn: toISOLocal(getValues('checkIn')).slice(0, 10),
        checkOut: toISOLocal(getValues('checkOut')).slice(0, 10),
      },
    })
  }

  useEffect(() => {
    const query = getValues()

    const days = getCalculatorDays(query.checkOut, query.checkIn)

    setNumberOfDays(days)
  }, [])

  return (
    <div
      className={classNames(
        'md:h-[19rem] bg-white',
        'border border-primary rounded',
      )}
    >
      <div className="grid grid-cols-12 gap-2 h-full w-full">
        <div className="col-span-12 md:col-span-4 flex flex-col gap-1">
          <div className="w-full h-64 md:h-full overflow-hidden relative">
            { prop?.h?.images?.[0] && (
              <Image
                unoptimized
                placeholder="blur"
                blurDataURL={AppHotelbeds.standard + prop?.h?.images?.[0]?.path}
                src={AppHotelbeds.standard + prop?.h?.images?.[0]?.path}
                alt=""
                layout="fill"
                objectFit="cover"
                className="rounded-tl-md"
              />)
            }

          </div>
          <div className="h-14 grid grid-cols-4 gap-1">
            { [1, 2, 3, 4].map((v, i, row) => {
              if (prop?.h?.images?.[v]?.path == null) {
                return null
              }
              return (
                <div
                  key={i}
                  className={classNames(
                    'w-full h-14 overflow-hidden relative',
                  )}
                >
                  <Image
                    unoptimized
                    placeholder="blur"
                    blurDataURL={AppHotelbeds.standard + prop?.h?.images?.[v]?.path}
                    src={AppHotelbeds.standard + prop?.h?.images?.[v]?.path}
                    alt=""
                    layout="fill"
                    objectFit="cover"
                  />
                  { i + 1 === row.length && (
                    <div className="bg-black opacity-60 w-full h-full absolute flex flex-wrap justify-center content-center">
                      <div className="text-white">ดูรูปที่พัก</div>
                    </div>
                  ) }

                </div>
              )
            }) }
          </div>
        </div>
        <div className="col-span-12 md:col-span-5 grid justify-between p-2">
          <div>
            <div className="text-primary text-xl">{ prop.h.hotelName }</div>
            <div className="text-2xl text-orange-400 gap-1 flex">
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
              <i className="bi bi-star-fill"></i>
            </div>
            <div className="flex gap-1 items-center">
              <i className="text-2xl bi bi-geo-alt"></i>
              <div>Chiang Mai</div>
            </div>
            <div className="flex flex-wrap gap-2">
              { [1, 2, 3, 4]?.map((v, i, r) => {
                if (prop?.h?.facilities?.[v]?.facilityName == null) {
                  return null
                }
                return (
                  <div
                    key={i}
                    className="border border-gray-200 rounded-sm py-1 px-2"
                  >{ prop?.h?.facilities?.[v]?.facilityName }</div>)
              }) }

              { prop?.h?.facilities && prop?.h?.facilities.length > 4 &&
                <div className="border border-gray-200 rounded-sm py-1 px-2">+{ prop?.h?.facilities.length - 4 }</div>
              }
            </div>
          </div>
          <div className=" flex flex-wrap gap-2">
            <div>จำนวนเตียง</div>
          </div>
        </div>
        <div className="col-span-12 md:col-span-3">
          <div className="hidden md:block relative">
            <div className="absolute top-0 left-0 w-full h-full fill-primary">
              <svg
                viewBox="0 0 140 60"
              >
                <g transform="translate(0,0)">
                  <path
                    d="m 0 0 h 140 v 40 l -70 15 l -70 -15 z"
                  />
                </g>
              </svg>
            </div>
            <div className="absolute w-full h-full">
              <div className="p-2 text-white">
                <div className="text-xs text-center">ราคาเมื่อจองผ่าน</div>
                <div className="text-xs text-center">Click & Go</div>
                <div className="text-2xl text-center">จองเลย</div>
              </div>
            </div>
          </div>
          <div className="w-full h-full grid content-end p-4 gap-4">

            { prop.aLoading ? (
              <>
              </>
            ) : (
              <div className="text-xl text-right">
                <div>
                    ราคารวม <span className="text-red-500">1</span> ที่พัก <span className="text-red-500">{ numberOfDays }</span> คืน
                </div>
                <div className="text-red-500 text-4xl">
                ฿ { prop.a?.minRate }
                </div>
              </div>
            ) }

            <div className="flex content-end justify-end">
              <Button
                onClick={() => {
                  handleOnClick()
                }}
                type="submit"
                className={classNames(
                  'h-full bg-primary p-4 px-6 border rounded font-semibold outline-none',
                  'placeholder-gray-400',
                  'text-md text-white',
                )}
              >
              เลือกห้องพัก
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { HotelCardMain }