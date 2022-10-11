import { Autoplay, FreeMode, Pagination } from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react'

import Image from 'next/image'
import classNames from 'classnames'

const data = {
  resources: [
    {
      title: 'Find me on Twitter',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: '/images/carousel/banner-1.png',
    },
    {
      title: 'Welcome to Ark Labs',
      link: 'https://ark-labs.co.uk',
      imageUrl: '/images/carousel/banner-2.png',
    },
    {
      title: 'Some sort of third title',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: '/images/carousel/banner-3.png',
    },
  ],
}

const CarouselPromotion = () => {
  return (
    <Swiper
      slidesPerView={'auto'}
      autoplay={{
        delay: 2500,
        disableOnInteraction: false,
      }}
      // slidesPerView={1}
      spaceBetween={30}
      // breakpoints={{
      //   640: {
      //     slidesPerView: 1,
      //     spaceBetween: 20,
      //   },
      //   768: {
      //     slidesPerView: 2,
      //     spaceBetween: 40,
      //   },
      //   1024: {
      //     slidesPerView: 2,
      //     spaceBetween: 50,
      //   },
      // }}
      freeMode={true}
      pagination={{
        clickable: true,
      }}
      modules={[Autoplay, FreeMode, Pagination]}
      // className="max-w-xs md:max-w-screen-md xl:max-w-screen-xl"
      className="w-screen max-w-screen-xl mx-auto"
    >
      { data.resources.map((resource, index) => {
        return (
          <SwiperSlide
            key={index}
          >
            <a
              href={resource.link}
            >
              <div
                className={classNames(
                  'h-24 md:h-40 lg:h-72',
                  'text-center',
                )}
              >

                <Image
                  unoptimized
                  placeholder="blur"
                  blurDataURL={resource.imageUrl || ''}
                  src={resource.imageUrl || ''}
                  alt={resource.title}
                  layout="fill"
                  // width={50}
                  // height={100}
                  objectFit="contain"
                />

              </div>
            </a>
          </SwiperSlide>
        )
      }) }
    </Swiper>
  )
}

export { CarouselPromotion }