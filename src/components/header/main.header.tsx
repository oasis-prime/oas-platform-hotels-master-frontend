import { useEffect, useState } from 'react'

import { ButtonOutline } from '@components/misc/button'
import Image from 'next/image'
import Link from 'next/link'
import { Link as LinkScroll } from 'react-scroll'
import classNames from 'classnames'
import { useRouter } from 'next/router'

type MainHeaderProps = {
  children?: JSX.Element
}

const DataNavigation = [
  {
    label: 'about',
    active: 'about',
    icon: '',
    url: '/'
  },
  {
    label: 'signup',
    active: 'signup',
    icon: '',
    url: '/signup'
  },
  {
    label: 'signup',
    active: 'signup',
    icon: '',
    url: '/signup'
  }
]

const MainHeader: React.FC<MainHeaderProps> = () => {
  // State
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrollActive, setScrollActive] = useState(false)

  // Hooks
  const router = useRouter()

  // Effect
  useEffect(() => {
    window.addEventListener('scroll', () => {
      setScrollActive(window.scrollY > 20)
    })
  }, [])
  return (
    <>
      <header
        className={classNames(
          'fixed top-0 w-full z-30 bg-white-500 transition-all',
          scrollActive ? ' shadow-md pt-0' : ''
        )}>
        <nav className="flex px-6 sm:px-8 lg:px-8 mx-auto py-3 sm:py-4">
          <div className="flex-none pr-4">
            <div className="h-12 w-12">
              <Image
                onClick={() => {
                  router.push('/')
                }}
                src={'/images/main/mini-logo.png'}
                layout="responsive"
                width={100}
                height={100}
                alt="logo"
              />
            </div>
          </div>
          <div className="grow grid grid-flow-col">
            <ul className="hidden lg:flex col-start-1 col-end-10 text-black-500  items-center">
              {DataNavigation.map((data, index) => (
                <Link key={index} href={data.url}>
                  <div
                    className={classNames(
                      'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative',
                      router.pathname === data.active
                        ? ' text-primary animation-active '
                        : ' text-black-500 hover:text-primary a'
                    )}>
                    {data.label}
                  </div>
                </Link>
              ))}
            </ul>
            <div className="col-start-10 col-end-12 font-medium flex justify-end items-center">
              <Link href="/">
                <a className="text-black-600 mx-2 sm:mx-4 capitalize tracking-wide hover:text-primary transition-all">
                  Sign In
                </a>
              </Link>
              <ButtonOutline>Sign Up</ButtonOutline>
            </div>
          </div>
        </nav>
      </header>
      {/* Mobile Navigation */}

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 px-4 sm:px-8 shadow-t ">
        <div className="bg-white-500 sm:px-3">
          <ul className="flex w-full justify-between items-center text-black-500">
            {/* <LinkScroll
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
              onSetActive={() => {
                setActiveLink('about')
              }}
              className={
                'mx-1 sm:mx-2 px-3 sm:px-4 py-2 flex flex-col items-center text-xs border-t-2 transition-all ' +
                (activeLink === 'about'
                  ? '  border-primary text-primary'
                  : ' border-transparent')
              }>
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              About
            </LinkScroll> */}
          </ul>
        </div>
      </nav>
      {/* End Mobile Navigation */}
    </>
  )
}

export { MainHeader }
