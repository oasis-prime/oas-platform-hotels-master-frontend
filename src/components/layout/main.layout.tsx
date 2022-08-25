import { Carousel } from '@components/misc/carousel'
import { MainFooter } from '@components/footer'
import { MainHeader } from '@components/header'
import classNames from 'classnames'

type MainLayoutProsp = {
  children: JSX.Element
}

const MainLayout: React.FC<MainLayoutProsp> = (props) => {
  return (
    <>
      <MainHeader />
      <div className="mt-20" />
      <div className={classNames('my-6', 'px-1')}>
        <div className="max-w-screen-xl mx-auto">{props.children}</div>
      </div>
      <MainFooter />
    </>
  )
}

export { MainLayout }
