import Image from 'next/image'
import classNames from 'classnames'

const HotelCardMain = () => {
  return (
    <div
      className={classNames(
        'h-64 bg-white',
        'border border-primary rounded p-2',
      )}
    >
      <div className="grid grid-cols-4 gap-2 h-full w-full">
        <div className="col-span-1">
          <div className="w-full h-full overflow-hidden relative">
            <Image
              src="http://photos.hotelbeds.com/giata/13/137704/137704a_hb_a_003.jpg"
              alt=""
              layout="fill"
              objectFit="cover"
              className="rounded-md"
            />
          </div>

        </div>
        <div className="col-span-2">

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
        </div>
        <div className="col-span-1">
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
            <div className="absolute w-full">
              <div className="p-2 text-white z-10">
                <div className="text-xs text-center">ราคาเมื่อจองผ่าน</div>
                <div className="text-xs text-center">Click & Go</div>
                <div className="text-2xl text-center">จองเลย</div>
              </div>
            </div>
          </div>
          <div>The Rim Chiang Mai</div>
          <div>เดอะริม เชียงใหม่</div>
        </div>
      </div>
    </div>
  )
}

export { HotelCardMain }