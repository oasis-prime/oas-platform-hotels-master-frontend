import { PaymentMutation, PaymentMutationVariables } from './generated/payment.generated'
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

const usePayment = () => useMutation<PaymentMutation, PaymentMutationVariables>(PAYMENT)

export { usePayment }