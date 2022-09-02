import { Button } from '@components/misc/button'
import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useState } from 'react'

type IHotelFacilities = {
  code: number
  name: string
}

const DEFAULT_HOTEL_FACILITIES: IHotelFacilities[] = [
  { code: 1, name: 'นำสัตว์เลี้ยงเข้าพักได้' },
  { code: 1, name: 'ที่จอดรถ' },
  { code: 1, name: 'Wi-Fi ทุกห้อง (ฟรี)' },
  { code: 1, name: 'บริการเช็คอิน/เช็คเอาต์แบบไร้การสัมผัส' },
  { code: 1, name: 'บาร์' },
  { code: 1, name: 'ห้องอาหาร' },
  { code: 1, name: 'รูมเซอร์วิส' },
  { code: 1, name: 'Wi-Fi ในพื้นที่สาธารณะ' },
]

const HotelCardMain = () => {
  const [hotelFacilities, setHotelFacilities] = useState(DEFAULT_HOTEL_FACILITIES)

  const router = useRouter()

  const handleOnClick = () => {
    router.push('TEST-SLUG/hotel')
  }

  return (
    <div
      className={classNames(
        'h-[19rem] bg-white',
        'border border-primary rounded',
      )}
    >
      <div className="grid grid-cols-12 gap-2 h-full w-full">
        <div className="col-span-4 flex flex-col gap-1">
          <div className="w-full h-full overflow-hidden relative">
            <Image
              src="http://photos.hotelbeds.com/giata/13/137704/137704a_hb_a_003.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-tl-md"
            />
          </div>
          <div className="h-14 grid grid-cols-4 gap-1">
            { [1, 2, 3, 4].map((rank, i, row) => (
              <div
                key={i}
                className={classNames(
                  'w-full h-14 overflow-hidden relative',
                )}
              >
                <Image
                  src="http://photos.hotelbeds.com/giata/13/137704/137704a_hb_a_003.jpg"
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
            )) }

          </div>

        </div>
        <div className="col-span-5 grid justify-between">
          <div>
            <div className="text-primary">The Rim Chiang Mai</div>
            <div className="text-2xl">เดอะริม เชียงใหม่</div>
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
              <div className="border border-gray-200 rounded-sm py-1 px-2">เครื่องปรับอากาศในพื้นที่สาธารณะ</div>
              <div className="border border-gray-200 rounded-sm py-1 px-2">แผนกต้อนรับ 24 ชม.</div>
              <div className="border border-gray-200 rounded-sm py-1 px-2">รูมเซอร์วิส</div>
              <div className="border border-gray-200 rounded-sm py-1 px-2">+3</div>
            </div>
          </div>
          <div className=" flex flex-wrap gap-2">
            <div>จำนวนเตียง</div>
          </div>
        </div>
        <div className="col-span-3">

          <div className="relative">
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

            <div className="text-xl text-right">
              <div>
                ราคารวม <span className="text-red-500">1</span> ที่พัก <span className="text-red-500">3</span> คืน
              </div>
              <div className="text-red-500 text-4xl">
                ฿ 3322
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