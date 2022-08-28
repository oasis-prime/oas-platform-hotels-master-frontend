import { Button, ButtonOutline } from '@components/misc/button'
import { FormProvider, useForm } from 'react-hook-form'

import { AppUrl } from '@utils/app.config'
import { IHomeSearch } from '@model/hotel-search'
import { MainDatepicker } from '@components/misc/datepicker/main.datepicker'
import { TextField } from '@components/misc/textField'
import { useRouter } from 'next/router'

const HotelSearch: React.FC = () => {
  const methods = useForm<IHomeSearch>()
  const router = useRouter()
  const onSubmit = (data: IHomeSearch) => {
    router.replace({
      pathname: AppUrl.hotels,
      query: {
        name: data.name
      }
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
            <TextField />
          </div>
          <div className="col-start-1 col-span-2">
            <p>เช็คอิน</p>
          </div>
          <div className="col-start-3 col-span-2">
            <p>เช็คเอ้าท์</p>
          </div>
          <div className="col-start-1 col-span-2">
            <MainDatepicker />
          </div>
          <div className="col-start-3 col-span-2">
            <MainDatepicker />
          </div>
          <div className="col-span-4">
            <p>จำนวนผู้เข้าพักและห้องพัก</p>
          </div>
          <div className="col-start-1 lg:col-span-3 col-span-4">
            <TextField />
          </div>
          <div className="lg:col-start-4 lg:col-span-1 col-span-4">
            <Button type="submit">ค้นหาโรงแรม</Button>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export { HotelSearch }
