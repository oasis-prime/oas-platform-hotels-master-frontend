import { Controller, useFormContext } from 'react-hook-form'
import { IHotelsDetailSearch, IHotelsSearch } from '@model/hotel-search'
import { getCheckIn, getCheckOut, toISOLocal } from '@utils/func'

import { AppUrl } from '@utils/app.config'
import { Button } from '@components/misc/button'
import { HotelSearchInput } from './hotel.search.input'
import { MainDatepicker } from '@components/misc/datepicker/main.datepicker'
import { OccupanciesSearch } from './occupancies.search'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'

type TopBarSearch = {
  screen: 'detail' | 'search'
}

const TopBarSearch = (props: TopBarSearch) => {
  const { t } = useTranslation()

  const router = useRouter()

  const { control, handleSubmit, watch, setValue } = useFormContext<IHotelsDetailSearch>()

  const data = watch()

  const onSubmit = (data: IHotelsDetailSearch) => {
    let query = {}
    if (props.screen === 'search') {
      query = {
        name: data.name,
        adults: data.adults,
        children: data.children,
        rooms: data.rooms,
        checkIn: toISOLocal(data.checkIn)?.slice(0, 10),
        checkOut: toISOLocal(data.checkOut)?.slice(0, 10),
        latitude: data.latitude ? data.latitude : undefined,
        longitude: data.longitude ? data.longitude : undefined,
      }
    } else {
      query = {
        code: data.code,
        adults: data.adults,
        children: data.children,
        rooms: data.rooms,
        checkIn: toISOLocal(data.checkIn)?.slice(0, 10),
        checkOut: toISOLocal(data.checkOut)?.slice(0, 10),
        latitude: data.latitude ? data.latitude : undefined,
        longitude: data.longitude ? data.longitude : undefined,
      }
    }


    router.push({
      pathname: props.screen === 'search' ? AppUrl.hotels : `/${router.query.slug}/hotel`,
      query: query,
    })
  }

  useEffect(() => {
    if (data?.checkIn?.getTime() >= data?.checkOut?.getTime()) {
      console.log('Effect checkIn')
      setValue('checkOut', getCheckOut(data.checkOut, data.checkIn))
    }
  }, [data.checkIn])

  useEffect(() => {
    if (data?.checkOut?.getTime() <= data?.checkIn?.getTime()) {
      console.log('Effect checkOut')
      setValue('checkIn', getCheckIn(data.checkIn, data.checkOut))
    }
  }, [data.checkOut])

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className={classNames(
        'grid grid-cols-12 gap-2 content-center items-center',
        'xl:grid-flow-col',
      )}
      >
        <div className={classNames(
          'col-span-12',
          // 'xs:col-span-6',
          'md:col-span-6',
        )}
        >
          { /* <Controller
            render={({ field: { onChange, value }}) => (
              <TextField
                placeholder={t('common:search.input_placeholder') || ''}
                value={value}
                onChange={onChange}
              />
            )}
            name="name"
            control={control}
          /> */ }
          <HotelSearchInput />

        </div>

        <div className={classNames(
          'col-span-12',
          // 'xs:col-span-6',
          'md:col-span-6',
        )}
        >
          <div className="flex flex-row">
            <Controller
              render={({ field: { onChange, value }}) => (
                <MainDatepicker
                  className={classNames(
                    'w-full bg-white border p-3 rounded-l-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400',
                  )}
                  value={value}
                  onChange={onChange}
                />
              )}
              name="checkIn"
              control={control}
            />
            <Controller
              render={({ field: { onChange, value }}) => (
                <MainDatepicker
                  className={classNames(
                    'w-full bg-white border p-3 rounded-r-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400',
                  )}
                  value={value}
                  onChange={onChange}
                />
              )}
              name="checkOut"
              control={control}
            />
          </div>
        </div>
        <div className={classNames(
          'col-span-12',
          // 'xs:col-span-6',
          'md:col-span-6',
        )}
        >
          <OccupanciesSearch screen="topbar" />
        </div>
        <div className={classNames(
          'col-span-12 h-full',
          'md:col-span-6',
        )}
        >
          <Button
            type="submit"
            className={classNames(
              'w-full h-full bg-secondary border rounded font-semibold outline-none min-h-[3rem]',
              'placeholder-gray-400',
              'transition ease-in-out delay-150',
              'px-4',
            )}
          >
            { t('common:search.submit') }
          </Button>
        </div>
      </div>
    </form>
  )
}

export { TopBarSearch }