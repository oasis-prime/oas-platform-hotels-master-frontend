import { HotelCategory } from './hotel.category'
import { HotelSearch_getHotel } from '@graphql/services/__generated__/HotelSearch'
import { useState } from 'react'

type IHotelsDetailSearchProps = {
  data?: HotelSearch_getHotel
}


const HotelDescriptionCard: (props: IHotelsDetailSearchProps) => JSX.Element = ({ data }: IHotelsDetailSearchProps) => {
  const [readMore, setReadMore] = useState(false)

  return (
    <div className="border border-gray-200 p-4">
      <div className="text-primary text-2xl">{ data?.hotelName }</div>
      <div className="text-xl">{ data?.hotelName }</div>
      <HotelCategory categoryGroup={data?.categoryGroupCode} />
      <div className="flex gap-1 items-center">
        <i className="text-2xl bi bi-geo-alt"></i>
        <div>{ data?.city?.content }</div>
      </div>
      <div className="">
        <p className={readMore ? '' : 'line-clamp-3'}>{ data?.description?.content }</p>
        <a
          className="text-primary cursor-pointer"
          onClick={(e) => {
            e.preventDefault()
            setReadMore(!readMore)
          }}
        >{ !readMore ? 'Read More' : 'Read Less' }</a>
      </div>
    </div>
  )
}

export { HotelDescriptionCard }