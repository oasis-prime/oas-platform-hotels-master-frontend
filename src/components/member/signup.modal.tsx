import { Button, ButtonIcons, ButtonOutline } from '@components/misc/button'

import { Checkbox } from '@components/misc/checkbox/main.checkbox'
import Image from 'next/image'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import useModal from '@store/useModal'

const SignupModal: React.FC = () => {
  const { signUp, setSignUp } = useModal()
  return (
    <>
      {signUp ? (
        <>
          <div className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-auto my-6 mx-auto max-w-3xl">
              <div className="absolute top-0 right-0 z-10">
                <ButtonIcons onClick={() => setSignUp(false)}>
                  <svg
                    className="h-8 w-8"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round">
                    <circle cx="12" cy="12" r="10" />
                    <line x1="15" y1="9" x2="9" y2="15" />
                    <line x1="9" y1="9" x2="15" y2="15" />
                  </svg>
                </ButtonIcons>
              </div>
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                <div
                  className={classNames(
                    'grid grid-flow-row-dense p-6',
                    'md:grid-cols-2 sm:grid-cols-1',
                    'gap-4'
                  )}>
                  <div className="col-span-1 h-full relative w-full">
                    <Image
                      src="/images/main/signin-image.jpeg"
                      layout="fill"
                      objectFit="cover"
                      alt="signin-image"
                    />
                  </div>
                  <div className="col-span-1 grid grid-flow-row gap-2">
                    <div>
                      <p className="text-lg">สร้างบัญชีผู้ใช้ Click & Go</p>
                    </div>
                    <div>
                      <ButtonOutline>ดำเนินการต่อด้วย Facebook</ButtonOutline>
                    </div>
                    <div>
                      <p className="text-lg">ชื่อ-นามสกุล</p>
                      <TextField />
                    </div>
                    <div>
                      <p className="text-lg">อีเมล</p>
                      <TextField />
                    </div>
                    <div>
                      <p className="text-lg">รหัสผ่าน</p>
                      <TextField />
                    </div>
                    <div>
                      <p className="text-lg">ยืนยันรหัสผ่าน</p>
                      <TextField />
                    </div>
                    <div className="mt-2">
                      <Checkbox className="float-left mr-2" />
                      <p className="">
                        ท่านยอมรับ{' '}
                        <span>ข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว</span>
                        เพื่อดำเนินการ
                      </p>
                    </div>
                    <div className="">
                      <Button>ยืนยันการสมัคร</Button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  )
}

export { SignupModal }
