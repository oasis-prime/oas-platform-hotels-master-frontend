import type { GetStaticProps, NextPage } from 'next'

import { Button } from '@components/misc/button'
import { Element } from 'react-scroll'
import { HomeSearch } from '@components/search/home.search'
import Image from 'next/image'
import { Modal } from '@components/misc/modal'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()
  return (
    <div className="columns-2">
      <div>
        <Image
          src="/images/main/home.png"
          layout="responsive"
          width={100}
          height={100}
          alt="promotion-index"
        />
      </div>
      <div>
        <HomeSearch />
      </div>
      {/* <Element name="about" className="element h-96">
        test 1
      </Element>
      <Modal isOpen={open} onClose={() => setOpen(false)} />
      <Button onClick={() => setOpen(true)}>{t('home:open')}</Button> */}
    </div>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, ['home']))
    }
  }
}

export default Home
