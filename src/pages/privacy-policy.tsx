import type { GetStaticProps, NextPage } from 'next'

import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const PrivacyPolicy: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="columns-2">
      <div>{ t('policy:title') }</div>
      <div>{ t('policy:sub-title') }</div>
      <div>{ t('policy:last-update') }</div>
      <div>{ t('policy:description') }</div>
      <div>
        <div>{ t('policy:one-title') }</div>
        <div>{ t('policy:one-description') }</div>
      </div>
      <div>
        <div>{ t('policy:two-title') }</div>
        <div>{ t('policy:two-description') }</div>
      </div>
      <div>
        <div>{ t('policy:three-title') }</div>
        <div>{ t('policy:three-description') }</div>
      </div>
      <div>
        <div>{ t('policy:four-title') }</div>
        <div>{ t('policy:four-description') }</div>
      </div>
      <div>
        <div>{ t('policy:five-title') }</div>
        <div>{ t('policy:five-description') }</div>
      </div>
      <div>
        <div>{ t('policy:six-title') }</div>
        <div>{ t('policy:six-description') }</div>
      </div>
      <div>
        <div>{ t('policy:seven-title') }</div>
        <div>{ t('policy:seven-description') }</div>
      </div>
      <div>
        <div>{ t('policy:eight-title') }</div>
        <div>{ t('policy:eight-description') }</div>
      </div>
      <div>
        <div>{ t('policy:nine-title') }</div>
        <div>{ t('policy:nine-description') }</div>
      </div>
      <div>
        <div>{ t('policy:ten-title') }</div>
        <div>{ t('policy:ten-description') }</div>
      </div>
      <div>
        <div>{ t('policy:eleven-title') }</div>
        <div>{ t('policy:eleven-description') }</div>
      </div>
      <div>
        <div>{ t('policy:twelve-title') }</div>
        <div>{ t('policy:twelve-description') }</div>
      </div>
      <div>
        <div>{ t('policy:thirteen-title') }</div>
        <div>{ t('policy:thirteen-description') }</div>
      </div>
      <div>
        <div>{ t('policy:fourteen-title') }</div>
        <div>{ t('policy:fourteen-description') }</div>
      </div>
      <div>{ t('policy:one-title') }</div>
      <div>{ t('policy:one') }</div>
      <div>
        <ul>
          <li>{ t('policy:one-sub-1') }</li>
          <li>{ t('policy:one-sub-2') }</li>
          <li>{ t('policy:one-sub-3') }</li>
          <li>{ t('policy:one-sub-4') }</li>
          <li>{ t('policy:one-sub-5') }</li>
        </ul>
      </div>
      <div>{ t('policy:two-title') }</div>
      <div>{ t('policy:two') }</div>
      <div>{ t('policy:three-title') }</div>
      <div>{ t('policy:three') }</div>
      <div>{ t('policy:four-title') }</div>
      <div>{ t('policy:four') }</div>
      <div>{ t('policy:five-title') }</div>
      <div>{ t('policy:five') }</div>
      <div>{ t('policy:six-title') }</div>
      <div>{ t('policy:six') }</div>
      <div>{ t('policy:seven-title') }</div>
      <div>{ t('policy:seven') }</div>
      <div>{ t('policy:eight-title') }</div>
      <div>{ t('policy:eight') }</div>
      <div>{ t('policy:nine-title') }</div>
      <div>{ t('policy:nine') }</div>
      <div>{ t('policy:ten-title') }</div>
      <div>{ t('policy:ten') }</div>
      <div>{ t('policy:eleven-title') }</div>
      <div>{ t('policy:eleven') }</div>
      <div>{ t('policy:twelve-title') }</div>
      <div>{ t('policy:twelve') }</div>
      <div>{ t('policy:thirteen-title') }</div>
      <div>{ t('policy:thirteen') }</div>
      <div>{ t('policy:fourteen-title') }</div>
      <div>{ t('policy:thirteen') }</div>
      <div>{ t('policy:address-company-name') }</div>
      <div>{ t('policy:address') }</div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['policy'])),
    },
  }
}

export default PrivacyPolicy
