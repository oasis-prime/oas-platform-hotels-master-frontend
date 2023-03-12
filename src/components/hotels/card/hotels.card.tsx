import { AvailabilityHotels, Hotel } from '@/types'
import { formatter, getCalculatorDays, makeSlug, toISOLocal } from '@utils/func'
import { useEffect, useState } from 'react'

import { AppHotelbeds } from '@utils/app.config'
import { Button } from '@components/misc/button'
import { HotelCategory } from './hotel.category'
import { IHotelsSearch } from '@model/hotel-search'
import Image from 'next/image'
import classNames from 'classnames'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

type IHotelCardMain = {
  readonly h: Hotel
  readonly a?: AvailabilityHotels
  readonly aLoading: boolean
}

const HotelCardMain = (prop: IHotelCardMain) => {
  const { t } = useTranslation()

  const { getValues, watch } = useFormContext<IHotelsSearch>()

  const [numberOfDays, setNumberOfDays] = useState('0')
  // const [hotelFacilities, setHotelFacilities] = useState(DEFAULT_HOTEL_FACILITIES)

  const router = useRouter()

  const handleOnClick = () => {
    const data = watch()
    if (prop.h.hotelName)
      router.push({
        pathname: `/${makeSlug(prop.h?.hotelName)}/hotel`,
        query: {
          code: prop.h.code,
          type: prop.h.type,
          name: data.name,
          adults: data.adults,
          children: data.children,
          rooms: data.rooms,
          checkIn: toISOLocal(data.checkIn).slice(0, 10),
          checkOut: toISOLocal(data.checkOut).slice(0, 10),
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
            <HotelCategory categoryGroup={prop.h.categoryGroupCode} />
            <div className="flex gap-1 items-center">
              <i className="text-2xl bi bi-geo-alt"></i>
              <div>{ prop.h.city?.content }</div>
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
            <div>{ prop.h.address?.content }, { prop.h.postalCode }</div>
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
                <div className="text-xs text-center">{ t('hotels:priceWhenBookingThrough') }</div>
                <div className="text-xs text-center">{ t('hotels:through') }</div>
                <div className="text-2xl text-center">{ t('hotels:bookNow') }</div>
              </div>
            </div>
          </div>
          <div className="w-full h-full grid content-end p-4 gap-4">

            { prop.aLoading ? (
              <>
              </>
            ) : (
              prop.a?.minRate ? (
                <>
                  <div className="text-xl text-right">
                    <div>
                      { t('hotels:totalCost') } <span className="text-red-500">1</span> { t('hotels:room') } <span className="text-red-500">{ numberOfDays }</span> { t('hotels:days') }
                    </div>
                    <div className="text-red-500 text-2xl">
                      { formatter.format(parseInt(prop.a?.minRate as string)) }
                    </div>
                  </div>
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
                      { t('hotels:chooseRoom') }
                    </Button>
                  </div>
                </>
              ) : (
                <div className="flex content-end justify-end">
                  <Button
                    type="button"
                    disabled
                    className={classNames(
                      'h-full bg-slate-400 p-4 px-6 border rounded font-semibold outline-none',
                      'placeholder-gray-400',
                      'text-md text-white',
                    )}
                  >
                    { t('hotels:not-available') }
                  </Button>
                </div>
              )
            ) }


          </div>
        </div>
      </div>
    </div>
  )
}

export { HotelCardMain }