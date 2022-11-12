import type { GetStaticProps, NextPage } from 'next'

import { AppConfig } from '@utils/app.config'
import { Carousel } from '@components/misc/carousel'
import { CarouselPromotion } from '@components/promotion/carousel.promotion'
import { HotelSearch } from '@components/search/index.search'
import Image from 'next/image'
import { LocationSearch } from '@components/search/localtion.search'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  // const { base64, img } = await getPlaiceholder('/path-to-your-image.jpg')

  return (
    <>
      <div className="bg-primary h-[1px]"></div>
      <div className="max-w-screen-xl mx-auto mt-4 grid-flow-row grid gap-6">
        <div className="text-2xl text-center">
          <h2>{ t('home:title') }</h2>
          <h3>{ t('home:sub-title') }</h3>
        </div>
        <div className="grid grid-cols-1 gap-4">
          <HotelSearch />
        </div>
        <div className="text-2xl text-center">
          <h3>{ t('home:promotion') }</h3>
        </div>
        <CarouselPromotion />
        <LocationSearch />
      </div>
    </>
  )
}

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...AppConfig.default_translations,
        'home',
      ])),
    },
  }
}

export default Home
