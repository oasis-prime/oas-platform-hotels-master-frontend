/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { AvailabilityInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: AvailabilitySearch
// ====================================================

export interface AvailabilitySearch_getAvailability_availability_rooms_rates_cancellationPolicies {
  __typename: "AvailabilityCancellationPolicies";
  amount: string | null;
  from: string | null;
}

export interface AvailabilitySearch_getAvailability_availability_rooms_rates {
  __typename: "AvailabilityRates";
  rateKey: string | null;
  rateClass: string | null;
  rateType: string | null;
  net: string | null;
  discount: string | null;
  discountPCT: string | null;
  sellingRate: string | null;
  allotment: number | null;
  paymentType: string | null;
  packaging: boolean | null;
  boardCode: string | null;
  boardName: string | null;
  rooms: number | null;
  adults: number | null;
  children: number | null;
  cancellationPolicies: (AvailabilitySearch_getAvailability_availability_rooms_rates_cancellationPolicies | null)[] | null;
}

export interface AvailabilitySearch_getAvailability_availability_rooms {
  __typename: "AvailabilityRooms";
  code: string | null;
  name: string | null;
  rates: (AvailabilitySearch_getAvailability_availability_rooms_rates | null)[] | null;
}

export interface AvailabilitySearch_getAvailability_availability {
  __typename: "AvailabilityHotels";
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
  minRate: string | null;
  maxRate: string | null;
  currency: string | null;
  rooms: (AvailabilitySearch_getAvailability_availability_rooms | null)[] | null;
}

export interface AvailabilitySearch_getAvailability {
  __typename: "AvailabilityData";
  availability: AvailabilitySearch_getAvailability_availability[];
}

export interface AvailabilitySearch {
  getAvailability: AvailabilitySearch_getAvailability;
}

export interface AvailabilitySearchVariables {
  input: AvailabilityInput;
}
