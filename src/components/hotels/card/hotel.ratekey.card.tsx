import { formatter, fullDateString } from '@utils/func'

import { CheckRate_checkRate } from '@graphql/services/__generated__/CheckRate'

type HotelRateKeyCard = {
  data?: CheckRate_checkRate
  checkIn?: Date
  checkOut?: Date
  numberOfDays: string
}

const HotelRateKeyCard = (props: HotelRateKeyCard) => {
  return (
    <div className="grid border border-gray-200 rounded-sm p-4">
      <div className="text-2xl text-primary">รายละเอียด</div>
      <div>{ props.data?.name }</div>

      <div>{ props.data?.zoneName }</div>

      <div>{ props.checkIn && fullDateString(props.checkIn) } - { props.checkOut && fullDateString(props.checkOut) } ({ props.numberOfDays } คืน )</div>
      <div>{ props.data?.rooms?.length } ห้อง</div>

      <div>{ props.data?.rooms?.[0]?.rates?.[0]?.adults } ผู้ใหญ่</div>

      { props.data?.rooms?.[0]?.rates?.[0]?.children as number > 0 &&
              <div>{ props.data?.rooms?.[0]?.rates?.[0]?.children } เด็ก</div>
      }


      <div>ราคาที่พัก	<span className="text-gray-400">{ formatter.format(parseInt(props.data?.totalSellingRate as string)) }</span></div>
      <div>ส่วนลดที่ได้รับ	<span className="text-orange-300">{ formatter.format(parseInt(props.data?.totalSellingRate as string) - parseInt(props.data?.totalNet as string)) }</span>	บาท</div>
      <div>ค่าธรรมเนียมการจอง	ฟรี</div>
      <div>ราคาที่ต้องจ่าย	<span className="text-green-500">{ formatter.format(parseInt(props.data?.totalNet as string)) }</span></div>
      <div>รวม: เซอร์วิสชาร์จ, ภาษี เรียบร้อยแล้ว</div>
    </div>
  )
}

export { HotelRateKeyCard }