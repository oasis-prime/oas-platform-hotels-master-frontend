import { Controller, useFormContext } from 'react-hook-form'

import { Checkbox } from '@components/misc/checkbox/main.checkbox'
import { IHotelsBooking } from '@model/hotel-search'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'

const BookingTextField = 'w-full bg-white border p-3 rounded-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400'

const BookingInformation = () => {
  const { control } = useFormContext<IHotelsBooking>()
  return (
    <div className="grid gap-2">
      <div>ข้อมูลผู้จอง</div>
      <div className="bg-gray-200 w-full h-[0.5px]" />
      <div>ชื่อ (Name)</div>
      <div>
        <Controller
          render={({ field: { onChange, value }, fieldState: { error }}) => (
            <TextField
              value={value}
              onChange={(e) => {
                onChange(e)
              }}
              className={classNames(
                BookingTextField,
                error && 'border-red-400',
              )}
            />
          )}
          name="holder.name"
          control={control}
        />
      </div>
      <div>นามสกุล (Surname)</div>
      <div>
        <Controller
          render={({ field: { onChange, value }, fieldState: { error }}) => (
            <TextField
              value={value}
              onChange={(e) => {
                onChange(e)
              }}
              className={classNames(
                BookingTextField,
                error && 'border-red-400',
              )}
            />
          )}
          name="holder.surname"
          control={control}
        />
      </div>
      <div>เบอร์โทร</div>
      <div>
        <Controller
          render={({ field: { onChange, value }, fieldState: { error }}) => (
            <TextField
              value={value}
              onChange={(e) => {
                onChange(e)
              }}
              className={classNames(
                BookingTextField,
                error && 'border-red-400',
              )}
            />
          )}
          name="phoneNumber"
          control={control}
        />
      </div>
      <div>อีเมล</div>
      <div>
        <Controller
          render={({ field: { onChange, value }, fieldState: { error }}) => (
            <TextField
              value={value}
              onChange={(e) => {
                onChange(e)
              }}
              className={classNames(
                BookingTextField,
                error && 'border-red-400',
              )}
            />
          )}
          name="email"
          control={control}
        />
      </div>
      { /* <div className="flex gap-2"><Checkbox /><p>จองให้ผู้อื่น</p></div> */ }
      { /* <div>รหัสคูปองส่วนลด</div>
            <div><TextField /></div> */ }
      <div>*หากใช้ส่วนลดแล้วไม่สามารถยกเลิกการจองได้</div>
      <div className="flex gap-2">
        <Controller
          render={({ field: { onChange, value }}) => (
            <Checkbox
              checked={value}
              onClick={() => {onChange(!value)}}
            />
          )}
          name="acceptPolicy"
          control={control}
        />

        <p>ท่านยอมรับ ข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว เพื่อดำเนินการ</p></div>
    </div>
  )
}

export { BookingInformation }