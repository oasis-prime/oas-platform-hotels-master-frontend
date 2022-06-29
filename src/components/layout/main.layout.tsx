import { Carousel } from '@components/misc/carousel'
import { MainHeader } from '@components/header'
import classNames from 'classnames'

type MainLayoutProsp = {
  children: JSX.Element
}

const MainLayout: React.FC<MainLayoutProsp> = (props) => {
  return (
    <>
      <MainHeader />
      <div className={classNames('flex flex-col', 'gap-6')}>
        <div className="mt-20">
          <Carousel />
        </div>
        <div className="max-w-screen-xl px-8 mx-auto" id="about">
          {props.children}
        </div>
      </div>
    </>
  )
}

export { MainLayout }
