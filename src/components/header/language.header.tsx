import { useEffect, useRef, useState } from 'react'

import Image from 'next/image'
import classNames from 'classnames'
import { usePopper } from 'react-popper'
import { useRouter } from 'next/router'

const LanguageHeader = () => {
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
    <>
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
        <div className="w-8 h-8">
          { locale === 'th' ?
            <Image
              className="rounded-full"
              src="/icons/png/th.png"
              alt="Thailand"
              layout="responsive"
              width="100"
              height="100"
            />
            :
            <Image
              className="rounded-full"
              src="/icons/png/en.png"
              alt="English"
              layout="responsive"
              width="100"
              height="100"
            /> }
        </div>
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
          <div className="flex flex-row gap-4 items-center px-2 py-2">
            <div>เปลี่ยนภาษา</div>
          </div>
          <div
            className="flex flex-row gap-4 items-center px-6 py-4 hover:bg-gray-200 rounded-t cursor-pointer"
            onClick={() => {
              console.log('TH')
              router.push(router.asPath, router.asPath, { locale: 'th' })
            }}
          >
            <div className="h-8 w-8">
              <Image
                className="rounded-full"
                src="/icons/png/th.png"
                alt="English"
                layout="responsive"
                width="100"
                height="100"
              />
            </div>
            <div>ภาษาไทย</div>
          </div>
          <div
            className="flex flex-row gap-4 items-center px-6 py-4 hover:bg-gray-200 cursor-pointer"
            onClick={() => {
              router.push(router.asPath, router.asPath, { locale: 'en' })
            }}
          >
            <div className="h-8 w-8">
              <Image
                className="rounded-full"
                src="/icons/png/en.png"
                alt="English"
                layout="responsive"
                width="100"
                height="100"
              />
            </div>
            <div>English</div>
          </div>
        </div>
      </div>
    </>
  )
}

export { LanguageHeader }