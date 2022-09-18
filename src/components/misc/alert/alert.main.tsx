import { MutableRefObject } from 'react'
import { isArray } from 'lodash'
import { useFormContext } from 'react-hook-form'

type AlertProps = {
  isShow: boolean
  notifyRef: MutableRefObject<HTMLDivElement>
}

const Alert: React.FC<AlertProps> = ({ isShow, notifyRef }: AlertProps) => {
  const { formState: { errors }}  = useFormContext()
  const keys = Object.keys(errors)

  return (
    <div
      className="txt-xs"
      style={{
        backgroundColor: '#C74D4D',
        color: 'white',
        display: isShow ? '' : 'none',
      }}
    >
      <div ref={notifyRef}>
        {
          keys.map((a, iv) => {
            if (errors[a] != null) {
              if (errors[a]?.message != null) {
                return (
                  <div
                    className="flex"
                    key={`${a}-${iv}`}
                  >
                    <div>{ errors[a]?.message as string }</div>
                  </div>)
              }
            }
          })
        }
      </div>
    </div>
  )
}

export { Alert }