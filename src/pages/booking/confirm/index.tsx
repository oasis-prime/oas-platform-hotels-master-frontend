import type { GetServerSideProps, NextPage } from 'next'

import { IncomingMessage } from 'http'
import { NextApiRequestCookies } from 'next/dist/server/api-utils'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const ConfirmPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return <div className="columns-2"></div>
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
  if (req.method === 'POST') {
    const body = await streamToString(req)
    // await getBody(req, res)
    console.log(body)
  }



  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['confirm'])),
    },
  }
}

export default ConfirmPage
