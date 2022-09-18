const BookingPayment = () => {
  return (
    <div className="grid gap-2">
      <div>ชำระเงิน</div>
      <div>เลือกวิธีชำระเงิน</div>
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
              <div>บัตรเครดิต/เดบิต</div>
              <div>สะดวก รวดเร็ว ปลอดภัย</div>
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