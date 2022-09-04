import { Checkbox } from '@components/misc/checkbox/main.checkbox'
import Image from 'next/image'
import { useState } from 'react'

type IFacilities = {
  code: number
  name: string
}

type IHotelsType = {
  code: number
  name: string
}

type IBedsType = {
  code: number
  name: string
}

const DEFAULT_FACILITIES: IFacilities[] = [
  { code: 1, name: 'สระว่ายน้ำ' },
  { code: 1, name: 'สระว่ายน้ำส่วนตัว' },
  { code: 1, name: 'อ่างอาบน้ำ' },
  { code: 1, name: 'รวมอาหารเช้า' },
]

const DEFAULT_HOTELS_TYPE: IHotelsType[] = [
  { code: 1, name: 'อพาร์ตเมนต์' },
  { code: 1, name: 'โรงแรม' },
  { code: 1, name: 'เซอร์วิส อพาร์ตเมนต์ ' },
  { code: 1, name: 'รีสอร์ต' },
  { code: 1, name: 'รีสอร์ต วิลลา' },
  { code: 1, name: 'วิลลาส่วนตัว' },
]

const DEFAULT_BEDS_TYPE: IBedsType[] = [
  { code: 1, name: 'เตียงคิงไซส์' },
  { code: 1, name: 'เตียงใหญ่' },
  { code: 1, name: 'เตียงเดี่ยว/เตียงแฝด' },
  { code: 1, name: 'เตียงควีนไซส์' },
  { code: 1, name: 'เตียงควีนไซส์' },
  { code: 1, name: 'เตียงสองชั้น' },
]

const HotelsFilter = () => {
  const [facilities, setFacilities] = useState<IFacilities[]>(DEFAULT_FACILITIES)
  const [hotelsType, setHotelsType] = useState<IHotelsType[]>(DEFAULT_HOTELS_TYPE)
  const [bedsType, setBedsType] = useState<IBedsType[]>(DEFAULT_BEDS_TYPE)

  return (
    <div className="grid gap-y-6 divide-y-2 divide-gray-200">
      <div className="relative h-32">
        <div className="absolute w-full h-32 rounded-md file:border border-gray-400 shadow-sm">
          <Image
            src="/images/main/search-on-map.jpeg"
            alt="search-map"
            layout="fill"
            objectFit="cover"
            className="rounded-md"
            width={100}
            height={100}
          />
          <div className="w-full h-full absolute flex flex-wrap justify-center content-end">
            <div className="text-gray-800 text-xl py-2">ค้นหาที่พัก</div>
          </div>
        </div>
      </div>
      <div className="grid gap-1">
        <div className="text-xl mt-4">กรองผลการค้นหา</div>
        { facilities.slice(0, 3).map((v, i, row) => {
          return (<div
            className="flex items-center"
            key={`facilities-filter-type-${i}`}
          >
            <Checkbox className="float-left mr-2" />
            <p className="">{ v.name }</p>
          </div>)
        }) }

      </div>
      <div className="grid gap-1">
        <div className="text-xl mt-4">ระดับดาว</div>
        <div className="flex items-center">
          <Checkbox className="float-left mr-2" />
          <div className="text-2xl text-orange-400 gap-1 flex">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <div className="flex items-center">
          <Checkbox className="float-left mr-2" />
          <div className="text-2xl text-orange-400 gap-1 flex">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
        <div className="flex items-center">
          <Checkbox className="float-left mr-2" />
          <div className="text-2xl text-orange-400 gap-1 flex">
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
            <i className="bi bi-star-fill"></i>
          </div>
        </div>
      </div>
      <div className="grid gap-1">
        <div className="text-xl mt-4">ประเภทที่พัก</div>
        { hotelsType.map((v, i) => (
          <div
            className="flex items-center"
            key={`hotels-filter-type-${i}`}
          >
            <Checkbox className="float-left mr-2" />
            <p className="">{ v.name }</p>
          </div>
        )) }
      </div>
      <div className="grid gap-1">
        <div className="text-xl mt-4">ประเภทเตียง</div>
        { bedsType.map((v, i) => (
          <div
            className="flex items-center"
            key={`beds-filter-type-${i}`}
          >
            <Checkbox className="float-left mr-2" />
            <p className="">{ v.name }</p>
          </div>
        )) }
      </div>
      <div className="grid gap-1">
        <div className="text-xl mt-4">สิ่งอำนวยความสะดวก/บริการ</div>
        { facilities.map((v, i, row) => {
          return (<div
            className="flex items-center"
            key={`facilities-filter-type-${i}`}
          >
            <Checkbox className="float-left mr-2" />
            <p className="">{ v.name }</p>
          </div>)
        }) }
      </div>
    </div>
  )
}

export { HotelsFilter }