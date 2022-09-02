import { AdultsIcon, ChildrenIcon } from '@components/svg'

import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const HotelRoomCard = () => {
  const router = useRouter()

  const onHandle = () => {
    router.push('/booking')
  }

  return (
    <div className="border border-gray-200 p-4 mb-5 grid gap-2">

      <div className="grid grid-flow-col grid-cols-12">
        <div className="col-span-10">
          <div className="text-lg">พรีเมียร์ เตียงใหญ่ (Premiere Double Room)</div>
          <div className="grid grid-cols-10 items-stretch gap-4">
            <div className="col-span-2">ห้องพัก</div>
            <div className="col-span-4">สิทธิประโยชน์</div>
            <div className="col-span-1">ผู้เข้าพัก</div>
            <div className="col-span-3">ราคา ต่อห้อง ต่อคืน</div>
          </div>
          <div className="grid grid-cols-10 items-stretch gap-4">
            <div className="col-span-2">
              <div className="h-32 mx-auto flex">
                <div
                  className={classNames(
                    'overflow-hidden relative w-full',
                  )}
                >
                  <Image
                    src="http://photos.hotelbeds.com/giata/13/137704/137704a_hb_a_003.jpg"
                    alt=""
                    layout="fill"
                    objectFit="cover"
                    className="rounded-md"
                  />
                </div>
              </div>
            </div>
            <div className="col-span-4">
              <div>ราคานี้รวม</div>
              <div><i className="bi bi-check text-green-600"></i> ที่จอดรถ, ฟรีอินเทอร์เน็ตไร้สาย (Wi-Fi), น้ำดื่ม</div>
              <div><i className="bi bi-check text-green-600"></i> ไม่ต้องใช้บัตรเครดิตในการจอง</div>
              <div><i className="bi bi-check text-green-600"></i> ชำระเงิน ณ ที่พัก</div>
              <div><i className="bi bi-check text-green-600"></i> ยกเลิกการจองได้ฟรีก่อนวันที่ 28 ธันวาคม 2022</div>
            </div>
            <div className="col-span-1 ">
              <div className="grid gap-2">
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">
                    <AdultsIcon />
                  </div>
                  <div>X 2</div>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-8 h-8">
                    <ChildrenIcon />
                  </div>
                  <div>X 2</div>
                </div>
              </div>
            </div>
            <div className="col-span-3">
              <div className="text-red-500">฿660</div>
              <div className="text-sm text-gray-400">ราคาเริ่มต้น (ต่อคืน)</div>
            </div>
          </div>
        </div>
        <div className="col-span-2 grid content-between">
          <div
            className="cursor-pointer"
            onClick={() => {
              onHandle()
            }}
          >
            <div className="relative h-24">
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
                  <div className="text-xl text-center">จองเลย</div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <div className="w-full border border-gray-200 text-center p-0.5 flex items-center gap-2">
              <div className="w-12 bg-slate-200 text-xl text-gray-800 py-2">2</div>
              <div className="text-red-500 text-xs">จำนวนผู้เข้าพักเกินกำหนด 4 คน</div>
            </div>
          </div>
        </div>
      </div>

    </div>
  )
}

export { HotelRoomCard }