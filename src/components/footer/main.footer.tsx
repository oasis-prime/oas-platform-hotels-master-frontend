import Image from 'next/image'
import classNames from 'classnames'
import { useTranslation } from 'next-i18next'

const MainFooter: React.FC = () => {
  const { t } = useTranslation()

  return (
    <div className="bg-primary pt-12 pb-24">
      <div
        className={classNames(
          'max-w-screen-xl w-full mx-auto px-6',
          'grid grid-rows-6 grid-flow-row grid-cols-3 gap-4',
          'sm:px-8 sm:grid-rows-1 sm:grid-flow-col sm:grid-cols-12',
          'lg:px-16'
        )}>
        <div
          className={classNames(
            'row-span-2 col-start-1 col-end-4 flex flex-col items-start',
            'sm:col-span-3'
          )}>
          <LogoVPN />
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'sm:col-span-2 sm:col-start-5'
          )}>
          <p className="text-white mb-4 font-medium text-lg">
            {t('footer:contact')}
          </p>
          <ul className="text-white ">
            <li
              className={classNames(
                'my-2 cursor-pointer transition-all',
                'hover:text-orange-500'
              )}>
              Download{' '}
            </li>
          </ul>
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'sm:col-span-2 sm:col-start-7'
          )}>
          <p className="text-white mb-4 font-medium text-lg">
            {t('footer:helpeCenter')}
          </p>
          <ul className="text-white">
            <li
              className={classNames(
                'my-2 cursor-pointer transition-all',
                'hover:text-orange-500'
              )}>
              Download{' '}
            </li>
          </ul>
        </div>
        <div
          className={classNames(
            'row-span-2 flex flex-col',
            'sm:col-span-3 sm:col-start-9'
          )}>
          <p className="text-white mb-4 font-medium text-lg">
            {t('footer:followUs')}
          </p>
          <div className={classNames('mt-2 mb-8 -mx-2 flex flex-wrap')}>
            {['bi-facebook', 'bi-twitter', 'bi-instagram', 'bi-line'].map(
              (v, i) => (
                <div
                  key={`icon-${i}`}
                  className={classNames('p-2 text-2xl text-white')}>
                  <i className={`bi ${v}`} />
                </div>
              )
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

const LogoVPN: React.FC = () => {
  return (
    <div className="sticky h-12 w-full mb-6">
      <Image
        src="/images/main/long-logo.png"
        layout="fill"
        objectFit="contain"
        alt="footer-logo"
      />
    </div>
  )
}

export { MainFooter }
