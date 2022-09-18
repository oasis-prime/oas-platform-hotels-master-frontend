import { Payment, PaymentVariables } from './__generated__/Payment'
import { gql, useMutation } from '@apollo/client'

const PAYMENT = gql`
  mutation Payment($input: PaymentInput!) {
    payment(input: $input) {
      orderNumber
      paymentUrl
      qrImage
    }
  }
`

const usePayment = () => useMutation<Payment, PaymentVariables>(PAYMENT)

export { usePayment }