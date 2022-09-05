import { useEffect, useRef, useState } from 'react'

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
      imageUrl: '/images/carousel/banner-2.jpeg',
    },
    {
      title: 'Some sort of third title',
      link: 'https://twitter.com/kendalmintcode',
      imageUrl: '/images/carousel/banner-3.png',
    },
  ],
}

type CarouselProsp = {
  //
}

const Carousel: React.FC<CarouselProsp> = () => {
  const maxScrollWidth = useRef(0)
  const [currentIndex, setCurrentIndex] = useState(0)
  const carousel = useRef<HTMLDivElement>(null)
  const [mousedOver, setMousedOver] = useState(false)

  const movePrev = () => {
    if (currentIndex > 0) {
      setCurrentIndex((prevState) => prevState - 1)
    }
  }

  const moveNext = () => {
    if (
      carousel.current !== null &&
      carousel.current.offsetWidth * currentIndex <= maxScrollWidth.current
    ) {
      setCurrentIndex((prevState) => prevState + 1)
    }
  }

  const isDisabled = (direction: 'next' | 'prev') => {
    if (direction === 'prev') {
      return currentIndex <= 0
    }

    if (direction === 'next' && carousel.current !== null) {
      return (
        carousel.current.offsetWidth * currentIndex >= maxScrollWidth.current
      )
    }

    return false
  }

  useEffect(() => {
    if (carousel !== null && carousel.current !== null) {
      carousel.current.scrollLeft = carousel.current.offsetWidth * currentIndex
    }
  }, [currentIndex])

  useEffect(() => {
    maxScrollWidth.current = carousel.current
      ? carousel.current.scrollWidth - carousel.current.offsetWidth
      : 0
  }, [])

  useEffect(() => {
    if (!mousedOver) {
      const timer = setInterval(() => {
        if (currentIndex < data.resources.length - 1) {
          moveNext()
        } else {
          setCurrentIndex(0)
        }
      }, 5000)
      return () => clearInterval(timer)
    }
  }, [mousedOver, currentIndex])

  return (
    <div
      className="max-w-screen-xl mx-auto"
      onMouseOver={() => setMousedOver(true)}
      onMouseOut={() => setMousedOver(false)}
    >
      <div className="relative overflow-hidden">
        <div className="flex justify-between absolute top left w-full h-full">
          <button
            onClick={movePrev}
            className={classNames(
              'text-white w-10 h-full text-center opacity-75 z-10 p-0 m-0',
              'transition-all ease-in-out duration-300',
              'hover:bg-primary/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed',
            )}
            disabled={isDisabled('prev')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M15 19l-7-7 7-7"
              />
            </svg>
            <span className="sr-only">Prev</span>
          </button>
          <button
            onClick={moveNext}
            className={classNames(
              'text-white w-10 h-full text-center opacity-75 z-10 p-0 m-0',
              'transition-all ease-in-out duration-300',
              'hover:bg-primary/75 hover:opacity-100 disabled:opacity-25 disabled:cursor-not-allowed',
            )}
            disabled={isDisabled('next')}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-12 w-20 -ml-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth={2}
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M9 5l7 7-7 7"
              />
            </svg>
            <span className="sr-only">Next</span>
          </button>
        </div>
        <div
          ref={carousel}
          className={classNames(
            'relative flex gap-1',
            'overflow-hidden scroll-smooth snap-x snap-mandatory touch-pan-x z-0',
          )}
        >
          { data.resources.map((resource, index) => {
            return (
              <div
                key={index}
                className={classNames(
                  'xs:max-h-28 sm:max-h-40 md:max-h-72 lg:max-h-96',
                  'text-center relative snap-start',
                )}
              >
                <a
                  href={resource.link}
                  className={classNames(
                    'h-full w-screen aspect-square block',
                    'bg-origin-padding bg-left-top bg-cover bg-no-repeat z-0',
                  )}
                >
                  <Image
                    unoptimized
                    placeholder="blur"
                    blurDataURL={resource.imageUrl || ''}
                    src={resource.imageUrl || ''}
                    alt={resource.title}
                    layout="fill"
                    objectFit="cover"
                    // width={100}
                    // height={100}
                  />
                </a>
                { /* <a
                  href={resource.link}
                  className={classNames(
                    'h-full w-full aspect-square block absolute top-0 left-0',
                    'transition-opacity duration-300 opacity-0 z-10',
                    'bg-primary/75',
                    'hover:opacity-100'
                  )}>
                  <h3 className="text-white py-6 px-3 mx-auto text-xl">
                    {resource.title}
                  </h3>
                </a> */ }
              </div>
            )
          }) }
        </div>
      </div>
    </div>
  )
}

export { Carousel }
