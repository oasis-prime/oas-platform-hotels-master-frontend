const getCheckOut = (checkout: Date, checkin: Date) => {
  const checkoutStr = toISOLocal(checkout).slice(0, 10)
  const checkinStr = toISOLocal(checkin).slice(0, 10)

  const ci = new Date(checkinStr)
  const co = new Date(checkoutStr)

  if (ci.getDate() >= co.getDate()) {
    const date = new Date()
    date.setDate(date.getDate() + 1)

    return date
  }

  return checkout
}

const getCheckIn = (checkin: Date) => {
  const nowDate = new Date()
  if (checkin <= nowDate) {
    nowDate.setDate(nowDate.getDate())
    return nowDate
  }

  return checkin
}

const getCalculatorDays = (checkout: Date, checkin: Date) => {
  const Difference_In_Time = checkout.getTime() - checkin.getTime()

  // To calculate the no. of days between two dates
  const Difference_In_Days = Difference_In_Time / (1000 * 3600 * 24)

  return Difference_In_Days.toFixed()
}

const parseDate = (str: string) => {
  const parts = str.split('-')
  const dt = new Date(parseInt(parts[0], 10),
    parseInt(parts[1], 10) - 1,
    parseInt(parts[2], 10))

  return dt
}

function toISOLocal(d: Date) {
  const z  = (n: number | string) =>  ('0' + n).slice(-2)
  const zz = (n: number | string) => ('00' + n).slice(-3)
  let off = d.getTimezoneOffset()
  const sign = off > 0 ? '-' : '+'
  off = Math.abs(off)

  return d.getFullYear() + '-'
         + z(d.getMonth() + 1) + '-' +
         z(d.getDate()) + 'T' +
         z(d.getHours()) + ':'  +
         z(d.getMinutes()) + ':' +
         z(d.getSeconds()) + '.' +
         zz(d.getMilliseconds()) +
         sign + z(off / 60 | 0) + ':' + z(off % 60)
}

function makeSlug(str: string) {
  str = str.toLowerCase()
  str = str.replace(/[^a-z0-9]+/g, '-')
  str = str.replace(/^-+|-+$/g, '')
  return str
}

export { parseDate, toISOLocal, getCheckIn, getCheckOut, getCalculatorDays, makeSlug }