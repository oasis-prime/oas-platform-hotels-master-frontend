import type { GetStaticProps, NextPage } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const PaymentPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return <div className="columns-2"></div>
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['payment']))
    }
  }
}

export default PaymentPage
