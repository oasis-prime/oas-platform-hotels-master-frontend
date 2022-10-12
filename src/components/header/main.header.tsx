import { Button, ButtonOutline, ButtonText } from '@components/misc/button'
import { useEffect, useState } from 'react'

import Image from 'next/image'
import { LanguageHeader } from './language.header'
import Link from 'next/link'
import classNames from 'classnames'
import useModal from '@store/useModal'
import { useRouter } from 'next/router'

type MainHeaderProps = {
  children?: JSX.Element
}

const DataNavigation = [
  {
    label: 'Hotels & Homes',
    active: 'home',
    icon: '',
    url: '/',
  },
  {
    label: 'Coupons & Deals',
    active: 'coupons',
    icon: '',
    url: '/coupons',
  },
  {
    label: 'Activities',
    active: 'activities',
    icon: '',
    url: '/activities',
  },
]

const MainHeader: React.FC<MainHeaderProps> = () => {
  // State
  const [activeLink, setActiveLink] = useState<string | null>(null)
  const [scrollActive, setScrollActive] = useState(false)
  const { signIn, signUp, setSignIn, setSignUp } = useModal()
  // const [signIn, setSignIn] = useState(false)
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
          'fixed top-0 w-full z-30 bg-white transition-all',
          scrollActive ? ' shadow-md pt-0' : '',
        )}
      >
        <nav className="flex px-6 sm:px-8 lg:px-8 mx-auto py-3 sm:py-4">
          <div className="flex-none pr-4">
            <div className="h-12 w-12">
              <Image
                unoptimized
                placeholder="blur"
                blurDataURL="/images/main/mini-logo.png"
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
              { DataNavigation.map((data, index) => (
                <Link
                  key={index}
                  href={data.url}
                >
                  <div
                    className={classNames(
                      'px-4 py-2 mx-2 cursor-pointer animation-hover inline-block relative',
                      router.pathname === data.active
                        ? ' text-primary animation-active '
                        : ' text-black-500 hover:text-primary a',
                    )}
                  >
                    { data.label }
                  </div>
                </Link>
              )) }
            </ul>
            <div className="col-span-2 flex gap-4 items-center">
              <div>
                <ButtonText
                  onClick={() => {
                    setSignIn(!signIn)
                  }}
                >
                Sign In
                </ButtonText>
              </div>
              <div>
                <ButtonOutline
                  onClick={() => {
                    setSignUp(!signUp)
                  }}
                >
                Sign Up
                </ButtonOutline>
              </div>
              <div>
                <LanguageHeader />
              </div>
            </div>
          </div>
        </nav>
      </header>
      { /* Mobile Navigation */ }

      <nav className="fixed lg:hidden bottom-0 left-0 right-0 z-20 shadow-t">
        <div className="bg-white sm:px-3">
          <ul className="grid grid-cols-3 divide-x divide-gray-200 text-black">
            { DataNavigation.map((data, index) => (
              <div
                key={index}
                onClick={() => {
                  router.push('/')
                }}
                className={classNames(
                  'mx-1 sm:mx-2 px-3 sm:px-4 py-2',
                  'flex flex-col items-center text-xs transition-all',
                  activeLink === 'about'
                    ? '  border-primary text-primary'
                    : ' border-transparent',
                )}
              >
                <svg
                  className="w-6 h-6"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                { data.label }
              </div>
            )) }
          </ul>
        </div>
      </nav>
      { /* End Mobile Navigation */ }
    </>
  )
}

export { MainHeader }
