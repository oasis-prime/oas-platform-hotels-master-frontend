import type { GetStaticProps, NextPage } from 'next'

import { AppConfig } from '@utils/app.config'
import { HotelCardMain } from '@components/hotels/card'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const HotelsPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  return (
    <div>
      <div className={classNames(
        'bg-primary h-16 w-full',
      )}
      >
        <div className="max-w-screen-xl mx-auto">
           ค้นหาโรงแรม
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto">
        <div className="grid grid-cols-7 gap-4">
          <div className="min-h-md bg-gray-400 col-span-2 w-full"></div>
          <div className="min-h-md col-span-5 bg-gray-600 w-full">
            <HotelCardMain />
          </div>
        </div>
      </div>
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...AppConfig.default_translations,
        'hotels',
      ])),
    },
  }
}

export default HotelsPage
