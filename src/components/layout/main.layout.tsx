import { MainFooter } from '@components/footer'
import { MainHeader } from '@components/header'
import classNames from 'classnames'

type MainLayoutProsp = {
  children: JSX.Element
}

const MainLayout = (props: MainLayoutProsp) => {
  return (
    <div>
      <MainHeader />
      <div className="mt-20" />
      <div className={classNames('my-6', 'min-h-[42rem]')}>
        { props.children }
      </div>
      <MainFooter />
    </div>
  )
}

export { MainLayout }
