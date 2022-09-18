/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { CheckRateInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: CheckRate
// ====================================================

export interface CheckRate_checkRate_modificationPolicies {
  __typename: "RaModificationPolicies";
  cancellation: boolean | null;
  modification: boolean | null;
}

export interface CheckRate_checkRate_rooms_rates_offers {
  __typename: "RaOffers";
  code: string | null;
  name: string | null;
  amount: string | null;
}

export interface CheckRate_checkRate_rooms_rates_rateBreakDown_rateDiscounts {
  __typename: "RaRateDiscounts";
  code: string | null;
  name: string | null;
  amount: string | null;
}

export interface CheckRate_checkRate_rooms_rates_rateBreakDown {
  __typename: "RaRateBreakDown";
  rateDiscounts: (CheckRate_checkRate_rooms_rates_rateBreakDown_rateDiscounts | null)[] | null;
}

export interface CheckRate_checkRate_rooms_rates_cancellationPolicies {
  __typename: "RaCancellationPolicies";
  amount: string | null;
  from: string | null;
}

export interface CheckRate_checkRate_rooms_rates {
  __typename: "RaRates";
  rateKey: string | null;
  rateClass: string | null;
  rateType: string | null;
  net: string | null;
  discount: string | null;
  discountPCT: string | null;
  sellingRate: string | null;
  allotment: number | null;
  rateComments: string | null;
  paymentType: string | null;
  packaging: boolean | null;
  boardCode: string | null;
  boardName: string | null;
  rooms: number | null;
  adults: number | null;
  children: number | null;
  offers: (CheckRate_checkRate_rooms_rates_offers | null)[] | null;
  rateBreakDown: CheckRate_checkRate_rooms_rates_rateBreakDown | null;
  cancellationPolicies: (CheckRate_checkRate_rooms_rates_cancellationPolicies | null)[] | null;
}

export interface CheckRate_checkRate_rooms {
  __typename: "RaRooms";
  code: string | null;
  name: string | null;
  rates: (CheckRate_checkRate_rooms_rates | null)[] | null;
}

export interface CheckRate_checkRate {
  __typename: "CheckRateData";
  checkOut: string | null;
  checkIn: string | null;
  code: number | null;
  name: string | null;
  categoryCode: string | null;
  categoryName: string | null;
  destinationCode: string | null;
  destinationName: string | null;
  zoneCode: number | null;
  zoneName: string | null;
  latitude: string | null;
  longitude: string | null;
  totalSellingRate: string | null;
  totalNet: string | null;
  currency: string | null;
  paymentDataRequired: boolean | null;
  modificationPolicies: CheckRate_checkRate_modificationPolicies | null;
  rooms: (CheckRate_checkRate_rooms | null)[] | null;
}

export interface CheckRate {
  checkRate: CheckRate_checkRate;
}

export interface CheckRateVariables {
  input: CheckRateInput;
}
