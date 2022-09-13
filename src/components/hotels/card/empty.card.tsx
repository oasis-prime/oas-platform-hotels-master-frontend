import Image from 'next/image'
import classNames from 'classnames'

const HotelCardEmpty = () => {
  return (
    <div className="border border-gray-200 p-4 mb-5 grid gap-2 justify-center">
      <div className="text-2xl text-center">ห้องพักของเราเต็มแล้ว</div>
      <div className="h-80 mx-auto flex">
        <div
          className={classNames(
            'overflow-hidden relative w-96',
          )}
        >
          <Image
            unoptimized
            placeholder="blur"
            blurDataURL="/images/main/non-available.gif"
            src="/images/main/non-available.gif"
            alt=""
            layout="fill"
            objectFit="contain"
            className="rounded-md"
          />
        </div>
      </div>
      <div className="text-center">สนใจค้นหาที่พักดูอีกครั้งไหม <a className="text-red-500">คลิกที่นี่</a></div>
    </div>
  )
}

export { HotelCardEmpty }