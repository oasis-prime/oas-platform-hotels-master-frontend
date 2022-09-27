import { Booking, BookingVariables } from '@graphql/services/__generated__/Booking'
import type { GetServerSideProps, NextPage } from 'next'

import { AppConfig } from '@utils/app.config'
import { BOOKING_INSERT } from '@graphql/services/booking'
import { IncomingMessage } from 'http'
import { LanguageEnum } from '__generated__/globalTypes'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import { apolloClientMain } from '@graphql/client'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

type ConfirmPageProps = {
  booking: Booking | null | undefined
}

const ConfirmPage = (props: ConfirmPageProps) => {
  const { booking } = props
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <>
      <div className="bg-primary w-full h-[0.5px]"></div>
      <div className="max-w-screen-xl mx-auto my-20">
        <div className="grid grid-cols-2 gap-2">
          <div className="col-span-2 justify-self-center">
            <i className="bi bi-calendar2-check text-6xl text-green-800"></i>
          </div>
          <div className="col-span-2">
            <div className="text-center">ขอบคุณสำหรับการจอง</div>
          </div>
          <div className="col-span-2">
            <div className="text-center">หมายเลขการจอง #{ booking?.booking.clientReference }</div>
          </div>
          <div className="col-span-2">
            <div className="text-center text-sm">ลงชื่อเข้าใช้งานโดย <span className="text-green-800">เมลล์ที่จอง</span> เพื่อดูประวัติการจอง</div>
          </div>
        </div>
      </div>
    </>
  )
}

const streamToString = async (stream: IncomingMessage & {
  cookies: NextApiRequestCookies;
}) => {
  if (stream) {
    const chunks = []
    for await (const chunk of stream) {
      chunks.push(Buffer.from(chunk))
    }
    return Buffer.concat(chunks).toString('utf-8')
  }
  return null
}

export const getServerSideProps: GetServerSideProps = async ({ req, res, locale }) => {
  console.log(req.method)
  let booking: Booking | null | undefined = null
  if (req.method === 'POST') {
    const body = await streamToString(req)

    if (body) {
      const jsonBody = JSON.parse(body)
      booking = await apolloClientMain.mutate<Booking, BookingVariables>({
        mutation: BOOKING_INSERT,
        variables: {
          input: {
            language: LanguageEnum.TAI,
            clientReference: jsonBody?.transNo,
          }},
        fetchPolicy: 'no-cache',
        errorPolicy: 'all',
      }).then(data => {
        return data.data
      }).catch(() => {
        return null
      })
    }
  }
  return {
    props: {
      booking: booking,
      ...(await serverSideTranslations(locale as string, [...AppConfig.default_translations, 'confirm'])),
    },
  }
}

export default ConfirmPage
