import { ButtonOutline, ButtonText } from '@components/misc/button'

import useModal from '@store/useModal'
import useAuth from '@store/useAuth'
import Image from 'next/image'
import classNames from 'classnames'
import { useRouter } from 'next/router'
import { useState, useRef, useEffect } from 'react'
import { usePopper } from 'react-popper'
import { useFirebaseAuth } from '@auth/auth'

type MainHeaderProps = {
  children?: JSX.Element
}

const ProfileHeader: React.FC<MainHeaderProps> = () => {
  // State
  const { signIn, signUp, setSignIn, setSignUp } = useModal()
  const { user } = useAuth()
  const auth = useFirebaseAuth()

  const router = useRouter()
  const { locale } = router

  const [dropdownPopoverShow, setDropdownPopoverShow] = useState(false)
  const referenceElement = useRef<HTMLButtonElement>(null)
  const popperElement = useRef<HTMLDivElement>(null)

  const { styles, attributes } = usePopper(referenceElement.current, popperElement.current, {
    placement: 'bottom-end',
    modifiers: [
      {
        name: 'arrow',
        options: {
          // element: arrow,
        },
      },
    ],
  })


  useEffect(() => {
    if (!dropdownPopoverShow) return

    function handleClickOutside(event: MouseEvent) {
      const a = event.target
      if (popperElement.current &&
        !popperElement.current.contains(a as Node) &&
        referenceElement.current &&
        !referenceElement.current.contains(a as Node) &&
        dropdownPopoverShow) {
        setDropdownPopoverShow(false)
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside)
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside)
    }
  }, [popperElement, referenceElement, dropdownPopoverShow])

  return (
    <div>
      <button
        className={classNames(
          'w-full bg-transparent p-1 rounded-full font-semibold outline-none',
          'placeholder-gray-400',
          'focus:border-free700 hover:bg-primary',
        )}
        ref={referenceElement}
        onClick={() => {
          setDropdownPopoverShow(!dropdownPopoverShow)
        }}
      >
        { user?.photoURL ? (
          <Image
            className="h-8 w-8 rounded-full mx-auto"
            src={user?.photoURL || ''}
            width={100}
            height={100}
            alt=""
          />
        ) : (
          <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
            <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
          </div>
        ) }
        { /* <a
          href="#"
          className="text-main-color"
        >Kojstantin</a> */ }
      </button>
      <div
        ref={popperElement}
      >
        <div
          className={classNames(
            'z-50 rounded shadow-lg mt-1 bg-gray-100',
            'divide-y divide-gray-200',
            'flex flex-col min-w-[300px]',
          )}
          style={!dropdownPopoverShow ? { display: 'none' } : styles.popper}
          {...attributes.popper}
        >
          <div className="flex flex-row gap-4 items-center px-6 py-4">
            <div>
              { user?.photoURL ? (
                <Image
                  className="h-12 w-12 rounded-full mx-auto"
                  src={user?.photoURL || ''}
                  width={100}
                  height={100}
                  alt=""
                />
              ) : (
                <div className="inline-flex overflow-hidden relative justify-center items-center w-10 h-10 bg-gray-100 rounded-full dark:bg-gray-600">
                  <span className="font-medium text-gray-600 dark:text-gray-300">JL</span>
                </div>
              ) }
            </div>
            <div className="flex flex-col">
              <a
                href="#"
                className="text-main-color"
              >{ user?.displayName }</a>
              <a
                href="#"
                className="text-main-color"
              >แก้ไขข้อมูล</a>
            </div>
          </div>
          <div
            className="flex flex-row gap-4 items-center px-6 py-4 hover:bg-gray-200 rounded-t cursor-pointer"
            onClick={() => {
              console.log('TH')
              router.push(router.asPath, router.asPath, { locale: 'th' })
            }}
          >
            <div>My booking</div>
          </div>
          <div
            className="flex flex-row gap-4 items-center px-6 py-4 hover:bg-gray-200 rounded-t cursor-pointer"
            onClick={() => {
              console.log('TH')
              router.push(router.asPath, router.asPath, { locale: 'th' })
            }}
          >
            <div>Inbox</div>
          </div>
          <div
            className="flex flex-row gap-4 items-center px-6 py-4 hover:bg-gray-200 rounded-t cursor-pointer"
            onClick={() => {
              console.log('TH')
              router.push(router.asPath, router.asPath, { locale: 'th' })
            }}
          >
            <div>Saved properties list</div>
          </div>
          <div
            className="flex flex-row gap-4 items-center px-6 py-4 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              setDropdownPopoverShow(false)
              auth?.signOut()
            }}
          >
            <div>Sign out</div>
          </div>
        </div>
      </div>
    </div>
  )
}

export { ProfileHeader }
