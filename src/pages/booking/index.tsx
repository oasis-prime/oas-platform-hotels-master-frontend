import type { GetStaticProps, NextPage } from 'next'

import { AppConfig } from '@utils/app.config'
import { Button } from '@components/misc/button'
import { Checkbox } from '@components/misc/checkbox/main.checkbox'
import { TextField } from '@components/misc/textField'
import classNames from 'classnames'
import { serverSideTranslations } from 'next-i18next/serverSideTranslations'
import { useRouter } from 'next/router'
import { useState } from 'react'
import { useTranslation } from 'next-i18next'

const BookingPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const router = useRouter()

  const onHandler = () => {
    router.push('/booking/payment')
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-5 gap-8 p-4">
        <div className="col-span-3">
          <div className="grid gap-2">
            <div>ข้อมูลผู้จอง</div>
            <div className="bg-gray-200 w-full h-[0.5px]" />
            <div>ชื่อ - นามสกุล</div>
            <div><TextField /></div>
            <div>Name - Surname</div>
            <div><TextField /></div>
            <div>เบอร์โทร</div>
            <div><TextField /></div>
            <div>อีเมล</div>
            <div><TextField /></div>
            <div className="flex gap-2"><Checkbox /><p>จองให้ผู้อื่น</p></div>
            <div>รหัสคูปองส่วนลด</div>
            <div><TextField /></div>
            <div>*หากใช้ส่วนลดแล้วไม่สามารถยกเลิกการจองได้</div>
            <div className="flex gap-2"><Checkbox /><p>ท่านยอมรับ ข้อกำหนดการใช้งานและนโยบายความเป็นส่วนตัว เพื่อดำเนินการ</p></div>
            <div>
              <Button
                onClick={() => {
                  onHandler()
                }}
                type="submit"
                className={classNames(
                  'p-3 px-7 float-right bg-primary text-white border rounded font-semibold outline-none',
                  'transition ease-in-out delay-150 hover:scale-105 duration-300',
                )}
              >
              ถัดไป
              </Button>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid border border-gray-200 rounded-sm p-4">
            <div className="text-2xl text-primary">รายละเอียด</div>
            <div>The Rim Chiang Mai</div>

            <div>CHIANG MAI</div>

            <div>10 กันยายน 2022 - 11 กันยายน 2022 (1 คืน )</div>
            <div>1 ห้อง</div>

            <div>1 ผู้ใหญ่</div>

            <div>0 เด็ก</div>

            <div>ราคาที่พัก	3,683.0	บาท</div>
            <div>ส่วนลดที่ได้รับ	0.00	บาท</div>
            <div>ค่าธรรมเนียมการจอง	ฟรี</div>
            <div>ราคาที่ต้องจ่าย	3,683.0	บาท</div>
            <div>รวม: เซอร์วิสชาร์จ, ภาษี เรียบร้อยแล้ว</div>
          </div>
        </div>
      </div>
    </div>
  )
}

// export const getStaticProps: GetStaticProps = async ({ locale }) => {
//   return {
//     props: {
//       ...(await serverSideTranslations(locale as string, ['booking'])),
//     },
//   }
// }

export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...AppConfig.default_translations,
        'booking',
      ])),
    },
  }
}

export default BookingPage
