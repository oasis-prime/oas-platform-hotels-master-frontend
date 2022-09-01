import { Button } from '@components/misc/button'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'

const TopBarSearch: React.FC = () => {
  return (
    <div className="h-16 grid grid-rows-9 gap-2 grid-flow-col content-center">
      <div className="">
        <TextField placeholder="สถานที่, โรงแรม, เมือง, ประเทศ" />
      </div>

      <div className="flex flex-row">
        <TextField className={classNames(
          'w-full bg-white border p-3 rounded-l-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400',
        )}
        />
        <TextField className={classNames(
          'w-full bg-white border p-3 rounded-r-lg font-semibold border-gray-200 focus:border-gray-400 outline-none placeholder-gray-400',
        )}
        />
      </div>
      <div className="">
        <TextField />
      </div>
      <div>
        <Button
          type="submit"
          className={classNames(
            'w-full h-full bg-secondary border rounded font-semibold outline-none',
            'placeholder-gray-400',
            'transition ease-in-out delay-150 hover:scale-105 duration-300',
          )}
        >
              ค้นหาโรงแรม
        </Button>
      </div>
    </div>
  )
}

export { TopBarSearch }