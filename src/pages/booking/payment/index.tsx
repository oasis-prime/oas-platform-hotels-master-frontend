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

const PaymentPage: NextPage = () => {
  const [open, setOpen] = useState(false)
  const { t } = useTranslation()

  const router = useRouter()

  const onHandler = () => {
    router.push('/booking/payment')
  }

  return (
    <div className="max-w-screen-xl mx-auto">
      <div className="grid grid-cols-5 gap-8">
        <div className="col-span-3">
          <div className="grid gap-2">
            <div>ชำระเงิน</div>
            <div>เลือกวิธีชำระเงิน</div>
            <div className="grid grid-cols-3">
              <div className="flex gap-4 items-center">
                <input
                  type="radio"
                  className="form-radio"
                  name="accountType"
                  value="personal"
                />
                <div className="border border-gray-400 p-4 flex">
                  <div>
                    <div>บัตรเครดิต/เดบิต</div>
                    <div>สะดวก รวดเร็ว ปลอดภัย</div>
                  </div>
                  <div>
                    <i className="bi bi-credit-card"></i>
                  </div>
                </div>
              </div>
            </div>
            <div className="bg-gray-200 w-full h-[1px] my-10"></div>
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
              ชำระเงิน
            </Button>
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
//       ...(await serverSideTranslations(locale as string, ['payment'])),
//     },
//   }
// }
export const getStaticProps: GetStaticProps = async ({ locale }) => {
  return {
    props: {
      ...(await serverSideTranslations(locale as string, [
        ...AppConfig.default_translations,
        'payment',
      ])),
    },
  }
}

export default PaymentPage
