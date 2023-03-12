import * as Types from '@/types'

export type PaymentMutationVariables = Types.Exact<{
  input: Types.PaymentInput;
}>;


export type PaymentMutation = { __typename?: 'Mutation', payment: { __typename?: 'PaymentData', orderNumber: string, paymentUrl: string, qrImage: string } };
