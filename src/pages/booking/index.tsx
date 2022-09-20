import * as yup from 'yup'

import { FormProvider, useForm } from 'react-hook-form'
import type { GetStaticProps, NextPage } from 'next'
import { getCalculatorDays, parseDate } from '@utils/func'
import { useEffect, useState } from 'react'

import { AppConfig } from '@utils/app.config'
import { BookingInformation } from '@components/hotels/booking/booking.information'
import { BookingPayment } from '@components/hotels/booking/booking.payment'
import { Button } from '@components/misc/button'
import { HotelRateKeyCard } from '@components/hotels/card/hotel.ratekey.card'
import { IHotelsBooking } from '@model/hotel-search'
import { LanguageEnum } from '__generated__/globalTypes'
import { MainLoading } from '@components/misc/loading/main.loading'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useCheckRate } from '@graphql/services/checkrate'
import { usePayment } from '@graphql/services/payment'
import { useRouter } from 'next/router'
import { useTranslation } from 'next-i18next'
import { yupResolver } from '@hookform/resolvers/yup'

const BookingPage: NextPage = () => {
  // holder: {
  //   name: string
  //   surname: string
  // }
  // rateKey: string
  // paxes: IHotelsPaxes[]
  // clientReference: string
  // remark: string
  // tolerance: number
  // email: string
  // phoneNumber: string
  // acceptPolicy: boolean
  const validationSchema = yup.object().shape({
    'holder': yup.object().shape({
      'name': yup.string().required('Title(th) is a required field'),
      'surname': yup.string().required('Title(en) is a required field'),
    }),
    'rateKey': yup.string().required('Slug is a required field'),
    // 'remark': yup.string().required('Slug is a required field'),
    'email': yup.string().required('Slug is a required field'),
    'phoneNumber': yup.string().required('Slug is a required field'),
  })

  const [numberOfDays, setNumberOfDays] = useState('0')
  const [step, setStep] = useState<'information'| 'payment'>('information')
  const [checkOut, setCheckOut] = useState<Date>()
  const [checkIn, setCheckIn] = useState<Date>()

  const methods = useForm<IHotelsBooking>({
    mode: 'onSubmit',
    reValidateMode: 'onChange',
    resolver: yupResolver(validationSchema),
    context: undefined,
    criteriaMode: 'firstError',
    shouldFocusError: true,
    shouldUnregister: false,
    shouldUseNativeValidation: false,
    delayError: undefined,
  })

  const { handleSubmit, reset } = methods

  const { t } = useTranslation()

  const [rateQuery, { data: rateData, loading: rateLoading }] = useCheckRate()
  const [paymentQuery, { data: paymentData, loading: paymentLoading }] = usePayment()

  const router = useRouter()

  const onHandler = () => {
    if (step === 'information') {
      setStep('payment')
    }

    if (step === 'payment') {
      const d = methods.watch()
      paymentQuery({
        variables: {
          input: {
            email: d.email,
            name: d.holder.name,
            surname: d.holder.surname,
            phoneNumber: d.phoneNumber,
            rateKey: router.query.rateKey as string,
          },
        },
        onCompleted: (data) => {
          window.location.href = `${data.payment.paymentUrl}`
        },
      },
      )
    }
  }

  useEffect(() => {
    if (!router.isReady) return

    console.log(router.query.rateKey)
    if (router.isReady) {
      rateQuery({
        variables: {
          input: {
            rateKey: router.query.rateKey as string,
            language: LanguageEnum.TAI,
          },
        },
      })

      reset({
        rateKey: router.query.rateKey as string,
      })
    }
  }, [router.query, router.isReady])

  useEffect(() => {
    if (rateData?.checkRate != null &&
      rateData.checkRate.checkOut != null &&
      rateData.checkRate.checkIn != null) {
      const checkOut = parseDate(rateData.checkRate.checkOut as string)
      const checkIn = parseDate(rateData.checkRate.checkIn as string)
      setCheckOut(checkOut)
      setCheckIn(checkIn)
      if (checkOut != null && checkIn != null) {
        const days = getCalculatorDays(checkOut, checkIn)

        setNumberOfDays(days)
      }
    }
  }, [rateData])

  if (rateData == null && rateLoading == true)
    return (<MainLoading />)


  return (
    <FormProvider {...methods}>
      { paymentLoading && <MainLoading /> }
      <form  onSubmit={handleSubmit(onHandler)}>
        <div className="max-w-screen-xl mx-auto">
          <div className="grid md:grid-cols-5 gap-4 p-4">
            <div className="order-last md:col-span-3 md:order-first">
              { step === 'information' && <BookingInformation /> }
              { step === 'payment' &&  <BookingPayment /> }

              <div className="flex justify-end">
                { step !== 'information' && (
                  <Button
                    onClick={() => {
                      setStep('information')
                    }}
                    type="submit"
                    className={classNames(
                      'p-3 px-7 float-right bg-primary text-white border rounded font-semibold outline-none',
                      'transition ease-in-out delay-150 hover:scale-105 duration-300',
                    )}
                  >ย้อนกลับ</Button>
                ) }

                { step === 'information' && (
                  <Button
                    type="submit"
                    className={classNames(
                      'p-3 px-7 float-right bg-primary text-white border rounded font-semibold outline-none',
                      'transition ease-in-out delay-150 hover:scale-105 duration-300',
                    )}
                  >
              ถัดไป
                  </Button>
                ) }

                { step === 'payment' && (
                  <Button
                    type="submit"
                    className={classNames(
                      'p-3 px-7 float-right bg-primary text-white border rounded font-semibold outline-none',
                      'transition ease-in-out delay-150 hover:scale-105 duration-300',
                    )}
                  >
              ชำระเงิน
                  </Button>
                ) }

              </div>
            </div>
            <div className="md:col-span-2">
              <HotelRateKeyCard
                checkIn={checkIn}
                checkOut={checkOut}
                data={rateData?.checkRate}
                numberOfDays={numberOfDays}
              />
            </div>
          </div>
        </div>
      </form>
    </FormProvider>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...AppConfig.default_translations,
        'booking',
      ])),
    },
  }
}

export default BookingPage
