import { AdultsIcon, ChildrenIcon } from '@components/svg'

import { AppHotelbeds } from '@utils/app.config'
import { AvailabilitySearch_getAvailability_availability_rooms } from '@graphql/services/__generated__/AvailabilitySearch'
import { ButtonText } from '@components/misc/button'
import { HotelSearch_getHotel_rooms } from '@graphql/services/__generated__/HotelSearch'
import { IHotelsDetailSearch } from '@model/hotel-search'
import Image from 'next/image'
import classNames from 'classnames'
import { formatter } from '@utils/func'
import { useFormContext } from 'react-hook-form'
import { useRouter } from 'next/router'

type HotelRoomCardProps = {
  data: HotelSearch_getHotel_rooms | null
  availability: AvailabilitySearch_getAvailability_availability_rooms | null
}

const HotelRoomCard = (props: HotelRoomCardProps) => {
  const { getValues, watch } = useFormContext<IHotelsDetailSearch>()

  const router = useRouter()

  const onHandle = (rateKey: string) => {
    router.push('/booking', {
      pathname: '/booking',
      query: {
        rateKey: rateKey,
      },
    })
  }

  const query = watch()

  const rateFilter = props.availability?.rates || []

  if (rateFilter.length < 0) {
    return <div></div>
  }

  return (
    <div className="border border-gray-200 p-4 mb-5 grid gap-2">

      <div className="grid grid-flow-col grid-cols-12 gap-4">
        <div className="col-span-12 md:col-span-10">
          <div className="text-lg">{ props.availability?.name } ({ props.data?.roomCode })</div>
          <div className="hidden md:grid grid-cols-12 md:grid-cols-10 gap-2">
            <div className="col-span-2">ห้องพัก</div>
            <div className="col-span-4">สิทธิประโยชน์</div>
            <div className="col-span-1">ผู้เข้าพัก</div>
            <div className="col-span-3">ราคา ต่อห้อง ต่อคืน</div>
          </div>
          <div className={classNames(
            'grid grid-cols-12 md:grid-cols-10 gap-2 grid-flow-row divide-y-[0.5px] auto-rows-auto',
          )}
          >
            <div className={classNames(
              'col-span-12 md:col-span-2',
              rateFilter?.length === 2 && 'row-span-2',
              rateFilter?.length === 3 && 'row-span-3',
              rateFilter?.length === 4 && 'row-span-4',
              rateFilter?.length === 5 && 'row-span-5',
              rateFilter?.length === 6 && 'row-span-6',
            )}
            >
              <div className="h-32 mx-auto flex">
                <div
                  className={classNames(
                    'overflow-hidden relative w-full',
                  )}
                >
                  {
                    props.data?.roomImages?.map((v, i) => (
                      <Image
                        key={`${props.data?.roomCode}-room-images-${i}`}
                        unoptimized
                        placeholder="blur"
                        blurDataURL={AppHotelbeds.standard + v?.path}
                        src={AppHotelbeds.standard + v?.path}
                        alt=""
                        layout="fill"
                        objectFit="cover"
                        className="rounded-md"
                      />
                    ))
                  }

                </div>
              </div>
            </div>
            {
              rateFilter?.map((v, i) => {
                return (
                  <div
                    key={v?.rooms}
                    className={classNames(
                      'grid grid-cols-12 md:grid-cols-8 py-4 px-2',
                      'col-span-12 md:col-span-8',
                    )}
                  >
                    <div className="col-span-6 md:col-span-4 text-sm">
                      <div>ราคานี้รวม</div>
                      <div><i className="bi bi-check text-green-600"></i> { v?.boardName }</div>

                      { v?.rateClass === 'NRF' && <div><i className="bi bi-shield-exclamation text-red-600"></i> Non-Refundable Rate</div> }

                      { v?.packaging && <div><i className="bi bi-shield-exclamation text-orange-600"></i> Promotion</div> }

                      { /* <div><i className="bi bi-check text-green-600"></i> ที่จอดรถ, ฟรีอินเทอร์เน็ตไร้สาย (Wi-Fi), น้ำดื่ม</div>
                      <div><i className="bi bi-check text-green-600"></i> ไม่ต้องใช้บัตรเครดิตในการจอง</div>
                      <div><i className="bi bi-check text-green-600"></i> ชำระเงิน ณ ที่พัก</div>
                      <div><i className="bi bi-check text-green-600"></i> ยกเลิกการจองได้ฟรีก่อนวันที่ 28 ธันวาคม 2022</div> */ }
                    </div>
                    <div className="col-span-3 md:col-span-1">
                      <div className="grid gap-2">
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4">
                            <AdultsIcon />
                          </div>
                          <div>X { props.data?.maxAdults }</div>
                        </div>
                        <div className="flex items-center gap-2">
                          <div className="w-4 h-4">
                            <ChildrenIcon />
                          </div>
                          <div>X { props.data?.maxChildren }</div>
                        </div>
                      </div>
                    </div>
                    <div className="col-span-3">
                      <div
                        className="cursor-pointer"
                        onClick={() => {
                          if (v?.rateKey != null)
                            onHandle(v?.rateKey)
                        }}
                      >
                        <div className="text-red-500">{ formatter.format(parseInt(v?.net as string)) }</div>
                        <div className="text-sm text-gray-400">ราคาเริ่มต้น (ต่อคืน)</div>
                        <div className="text-green-500 underline">จองราคานี้</div>
                      </div>
                      { /* <ButtonText>จองเลย</ButtonText> */ }
                    </div>
                    { /* <div className="md:hidden col-span-12">
                      <ButtonText>จองเลย</ButtonText>
                    </div> */ }
                  </div>
                )
              })
            }

          </div>
        </div>
        <div className="hidden md:block md:col-span-2 grid content-between">
          <div
            className="cursor-pointer"
            onClick={() => {
              if (rateFilter[0]?.rateKey)
                onHandle(rateFilter[0]?.rateKey)
            }}
          >
            <div className="relative h-32">
              <div className="absolute top-0 left-0 w-full h-full fill-primary">
                <svg
                  viewBox="0 0 140 80"
                >
                  <g transform="translate(0,0)">
                    <path
                      d="m 0 0 h 140 v 60 l -70 15 l -70 -15 z"
                    />
                  </g>
                </svg>
              </div>
              <div className="absolute w-full h-full">
                <div className="p-2 text-white">
                  <div className="sm:text-xs text-center">ราคาเมื่อจองผ่าน</div>
                  <div className="sm:text-xs text-center">Click & Go</div>
                  <div className="sm:text-xl text-center">จองเลย</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full border border-gray-200 text-center p-0.5 flex items-center gap-2">
              <div className="w-12 bg-slate-200 text-xl text-gray-800 py-2">{ props.data?.maxPax }</div>

              { props.data?.maxPax &&
                query.adults + query.children > props.data?.maxPax ?
                <div className="text-red-500 text-xs">จำนวนผู้เข้าพักเกินกำหนด { props.data?.maxPax } คน</div> :
                <div className="text-xs">จำนวนผู้เข้าพักสูงสุด</div>
              }

            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { HotelRoomCard }