import { useTranslation } from 'next-i18next'

const BookingPayment = () => {
  const { t } = useTranslation()

  return (
    <div className="grid gap-2">
      <div>{ t('booking:pay') }</div>
      <div>{ t('booking:choosePaymentMethod') }</div>
      <div className="grid md:grid-cols-3">
        <div className="flex gap-4 items-center">
          <input
            checked={true}
            type="radio"
            className="form-radio"
            name="accountType"
            value="personal"
          />
          <div className="border border-gray-400 p-4 flex">
            <div>
              <div>{ t('booking:credit/debit card') }</div>
              <div>{ t('booking:Convenient, fast, safe') }</div>
            </div>
            <div>
              <i className="bi bi-credit-card"></i>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-gray-200 w-full h-[1px] my-4"></div>
    </div>
  )
}

export { BookingPayment }