/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { PaymentInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Payment
// ====================================================

export interface Payment_payment {
  __typename: "PaymentData";
  orderNumber: string;
  paymentUrl: string;
  qrImage: string;
}

export interface Payment {
  payment: Payment_payment;
}

export interface PaymentVariables {
  input: PaymentInput;
}
