import { Facilities } from '@/types'
import { useTranslation } from 'next-i18next'

type HotelFacilities = {
  data?: (Facilities | null)[] | null
}

const HotelFacilitiesCard: (props: HotelFacilities) => JSX.Element = (props: HotelFacilities) => {
  const { t } = useTranslation()

  return (
    <div className="border border-gray-200 p-4">
      <div className="text-2xl">{ t('hotel:facilities') }</div>
      <div className="grid grid-cols-2">
        { props.data && props.data.map((v, i) => (
          <div key={`facility-name-${i}`}>
            { v?.facilityName }
          </div>
        )) }
      </div>
    </div>
  )
}

export { HotelFacilitiesCard }