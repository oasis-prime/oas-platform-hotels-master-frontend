import type { GetStaticProps, NextPage } from 'next'

import { AppConfig } from '@utils/app.config'
import { Carousel } from '@components/misc/carousel'
import { HotelSearch } from '@components/search/index.search'
import Image from 'next/image'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const Home: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  // const { base64, img } = await getPlaiceholder('/path-to-your-image.jpg')

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="text-2xl text-center">
        <h2>จองโรงแรม รีสอร์ต โฮสเทล และอีกมากมาย</h2>
      </div>
      <div className="text-2xl text-center">
        <h3>จองที่พักราคาพิเศษกว่า 2 ล้านแห่งทั่วโลก</h3>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-6">
        <div className="md:block hidden">
          <Image
            unoptimized
            placeholder="blur"
            blurDataURL="/images/main/home.png"
            priority={true}
            src="/images/main/home.png"
            layout="responsive"
            width={100}
            height={100}
            alt="promotion-index"
          />
        </div>
        <div className="">
          <HotelSearch />
        </div>
      </div>

      <div className="mt-6 max-w-screen-xl">
        <Carousel />
      </div>
    </div>
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
