import Image from 'next/image'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

const MainFooter: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-primary p-6 pb-24">
      <div
        className={classNames(
          'max-w-screen-xl w-full mx-auto',
          'grid gap-4',
          'grid-rows-1 md:grid-flow-col grid-cols-12',
        )}
      >
        <div
          className={classNames(
            'row-span-2 flex flex-col items-start',
            'col-span-12 md:col-span-4',
          )}
        >
          <LogoVPN />
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'col-span-12 md:col-span-2',
          )}
        >
          <p className="text-white font-medium text-xl">
            { t('footer:contact') }
          </p>
          <ul className="text-white ">
            { [t('footer:contactItems.contactUs'), t('footer:contactItems.privacyPolicy'), t('footer:contactItems.about')].map((i, v) => (
              <li
                key={v}
                className={classNames(
                  'my-2 cursor-pointer transition-all',
                  'hover:text-orange-500',
                )}
              >
                { i }
              </li>
            )) }

          </ul>
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'col-span-12 md:col-span-2',
          )}
        >
          <p className="text-white font-medium text-xl">
            { t('footer:helpeCenter') }
          </p>
          <ul className="text-white">
            <li
              className={classNames(
                'my-2 cursor-pointer transition-all',
                'hover:text-orange-500',
              )}
            >
              { t('footer:helpItems.paymentMethod') }
            </li>
          </ul>
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'col-span-12 md:col-span-2',
          )}
        >
          <p className="text-white font-medium text-xl">
            { t('footer:helpeCenter') }
          </p>
          <ul className="text-white">
            <li
              className={classNames(
                'my-2 cursor-pointer transition-all',
                'hover:text-orange-500',
              )}
            >
              { t('footer:helpItems.howToBookAHotel') }
            </li>
          </ul>
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'col-span-12 md:col-span-2',
            // 'grid justify-end text-right',
          )}
        >
          <p className="text-white font-medium text-xl">
            { t('footer:followUs') }
          </p>
          <div className={classNames('mt-2 mb-8 -mx-2 flex flex-wrap')}>
            { ['bi-facebook', 'bi-twitter', 'bi-instagram', 'bi-line'].map(
              (v, i) => (
                <div
                  key={`icon-${i}`}
                  className={classNames('p-2 text-2xl text-white')}
                >
                  <i className={`bi ${v}`} />
                </div>
              ),
            ) }
          </div>
        </div>
      </div>
    </div>
  )
}

const LogoVPN: React.FC = () => {
  return (
    <div className="relative h-48 w-full">
      <Image
        unoptimized
        placeholder="blur"
        blurDataURL="/images/main/long-logo.png"
        src="/images/main/long-logo.png"
        layout="fill"
        objectFit="contain"
        alt="footer-logo"
      />
    </div>
  )
}

export { MainFooter }
