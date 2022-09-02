import type { GetStaticProps, NextPage } from 'next'

import { AppConfig } from '@utils/app.config'
import { HotelCardMain } from '@components/hotels/card'
import { TopBarSearch } from '@components/search/topbar.search'
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
          <TopBarSearch />
        </div>
      </div>
      <div className="max-w-screen-xl mx-auto mt-2">
        <div className="grid gap-2">
          <div className="text-2xl">
        แค่<span className="text-primary">คลิก</span> แล้ว<span className="text-primary">ไป</span>
          </div>
          <div className="">
            <div className="grid grid-cols-12 gap-4">
              <div className={classNames(
                'min-h-md transition w-full',
                'col-span-12 xl:col-span-3',
                'ease-in-out delay-150',
              )}
              >
                <div className="text-xl">กรองผลการค้นหา</div>
              </div>
              <div className="min-h-md col-span-9 w-full">
                <HotelCardMain />
              </div>
            </div>
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
