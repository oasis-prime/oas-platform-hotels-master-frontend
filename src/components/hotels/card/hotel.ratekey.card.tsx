import { formatter, fullDateString } from '@utils/func'

import { CheckRate_checkRate } from '@graphql/services/__generated__/CheckRate'
import { useTranslation } from 'next-i18next'

type HotelRateKeyCard = {
  data?: CheckRate_checkRate
  checkIn?: Date
  checkOut?: Date
  numberOfDays: string
}

const HotelRateKeyCard = (props: HotelRateKeyCard) => {
  const { t } = useTranslation()

  return (
    <div className="grid border border-gray-200 rounded-sm p-4">
      <div className="text-2xl text-primary">{ t('booking:details') }</div>
      <div>{ props.data?.name }</div>

      <div>{ props.data?.zoneName }</div>

      <div>{ props.checkIn && fullDateString(props.checkIn) } - { props.checkOut && fullDateString(props.checkOut) } ({ props.numberOfDays } { t('booking:days') } )</div>
      <div>{ props.data?.rooms?.length } { t('booking:room') }</div>

      <div>{ props.data?.rooms?.[0]?.rates?.[0]?.adults } { t('booking:adults') }</div>

      { props.data?.rooms?.[0]?.rates?.[0]?.children as number > 0 &&
              <div>{ props.data?.rooms?.[0]?.rates?.[0]?.children } { t('booking:children') }</div>
      }


      <div>{ t('booking:accommodationPrice') }	<span className="text-gray-400">{ formatter.format(parseInt(props.data?.totalSellingRate as string)) }</span></div>
      <div>{ t('booking:discountReceived') }	<span className="text-orange-300">{ formatter.format(parseInt(props.data?.totalSellingRate as string) - parseInt(props.data?.totalNet as string)) }</span>	฿</div>
      <div>{ t('booking:freeBookingFee') }</div>
      <div>{ t('booking:priceToPay') }	<span className="text-green-500">{ formatter.format(parseInt(props.data?.totalNet as string)) }</span></div>
      <div>{ t('booking:includes') }</div>
    </div>
  )
}

export { HotelRateKeyCard }