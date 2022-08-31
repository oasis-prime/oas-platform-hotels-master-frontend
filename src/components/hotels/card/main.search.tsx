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
      <div className="grid grid-cols-4 gap2 h-full w-full">
        <div className="col-span-1">
          { /* <div
            className="bg-auto bg-no-repeat bg-center"
            // style={{ backgroundImage: 'url("http://photos.hotelbeds.com/giata/13/137704/137704a_hb_a_003.jpg")' }}
          ></div> */ }
          { /* <img
            src="http://photos.hotelbeds.com/giata/13/137704/137704a_hb_a_003.jpg"
            className="w-full h-full cont bg-cover"
            alt=""
          /> */ }
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
          <div>The Rim Chiang Mai</div>
          <div>เดอะริม เชียงใหม่</div>
        </div>
        <div className="col-span-1">
          <div>จองเลย</div>
        </div>
      </div>
    </div>
  )
}

export { HotelCardMain }