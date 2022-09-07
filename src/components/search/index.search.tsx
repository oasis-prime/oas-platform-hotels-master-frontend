import { Button, ButtonOutline } from '@components/misc/button'
import { Controller, FormProvider, useForm } from 'react-hook-form'
import { getCheckIn, getCheckOut, toISOLocal } from '@utils/func'

import { AppUrl } from '@utils/app.config'
import { HotelSearchInput } from './hotel.search.input'
import { IHotelsSearch } from '@model/hotel-search'
import { MainDatepicker } from '@components/misc/datepicker/main.datepicker'
import { OccupanciesSearch } from './occupancies.search'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { useRouter } from 'next/router'

const HotelSearch: React.FC = () => {
  const methods = useForm<IHotelsSearch>({
    defaultValues: {
      name: '',
      adults: 1,
      children: 0,
      rooms: 1,
      checkIn: getCheckIn(new Date()),
      checkOut: getCheckOut(new Date(), new Date()),
    },
  })
  const router = useRouter()
  const onSubmit = (data: IHotelsSearch) => {
    router.push({
      pathname: AppUrl.hotels,
      query: {
        name: data.name,
        adults: data.adults,
        children: data.children,
        rooms: data.rooms,
        checkIn: toISOLocal(data.checkIn).slice(0, 10),
        checkOut: toISOLocal(data.checkOut).slice(0, 10),
      },
    })
  }

  return (
    <FormProvider {...methods}>
      <form onSubmit={methods.handleSubmit(onSubmit)}>
        <div className="grid grid-cols-4 gap-4 border-solid border-2 rounded-md shadow-md px-6 py-8">
          <div className="col-span-4">
            <p>ค้นหาโรงแรมในประเทศ/ต่างประเทศ</p>
          </div>
          <div className="col-span-4">
            <HotelSearchInput />
          </div>
          <div className="col-start-1 col-span-2">
            <p>เช็คอิน</p>
          </div>
          <div className="col-start-3 col-span-2">
            <p>เช็คเอ้าท์</p>
          </div>
          <div className="col-start-1 col-span-2">
            <Controller
              render={({ field: { onChange, value }}) => (
                <MainDatepicker
                  value={value}
                  onChange={onChange}
                />
              )}
              name="checkIn"
              control={methods.control}
            />

          </div>
          <div className="col-start-3 col-span-2">
            <Controller
              render={({ field: { onChange, value }}) => (
                <MainDatepicker
                  value={value}
                  onChange={onChange}
                />
              )}
              name="checkOut"
              control={methods.control}
            />
          </div>
          <div className="col-span-4">
            <p>จำนวนผู้เข้าพักและห้องพัก</p>
          </div>
          <div className="col-start-1 lg:col-span-3 col-span-4">
            <OccupanciesSearch />
          </div>
          <div className="lg:col-start-4 lg:col-span-1 col-span-4">
            <Button
              type="submit"
              className={classNames(
                'w-full lg:h-full min-h-[4rem] bg-transparent border rounded font-semibold outline-none',
                'placeholder-gray-400',
                'focus:border-primary hover:border-primary hover:border-2',
                'whitespace-pre',
              )}
            >
              <p className="whitespace-pre-wrap">
                ค้นหาโรงแรม
              </p>
            </Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export { HotelSearch }
