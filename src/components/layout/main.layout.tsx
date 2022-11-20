import { MainFooter } from '@components/footer'
import { MainHeader } from '@components/header'
import classNames from 'classnames'

type MainLayoutProsp = {
  children: JSX.Element
}

const MainLayout = (props: MainLayoutProsp) => {
  return (
    <div className="flex flex-col h-screen">
      <MainHeader />
      <div className="mt-20" />
      <main className={classNames('pb-20 md:pb-12', 'flex-grow')}>
        { props.children }
      </main>
      <MainFooter />
    </div>
  )
}

export { MainLayout }
