import { HotelSearch_getHotel_facilities } from '@graphql/services/__generated__/HotelSearch'

type HotelFacilities = {
  data?: (HotelSearch_getHotel_facilities | null)[] | null
}

const HotelFacilitiesCard: (props: HotelFacilities) => JSX.Element = (props: HotelFacilities) => {
  return (
    <div className="border border-gray-200 p-4">
      <div className="text-2xl">สิ่งอำนวยความสะดวก</div>
      { props.data && props.data.map((v, i) => (
        <div key={`facility-name-${i}`}>
          { v?.facilityName }
        </div>
      )) }
    </div>
  )
}

export { HotelFacilitiesCard }