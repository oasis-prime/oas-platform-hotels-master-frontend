/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { BookingInput } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL mutation operation: Booking
// ====================================================

export interface Booking_booking_invoiceCompany {
  __typename: "B_InvoiceCompany";
  code: string | null;
  company: string | null;
  registrationNumber: string | null;
}

export interface Booking_booking_hotel_supplier {
  __typename: "B_Supplier";
  name: string | null;
  vatNumber: string | null;
}

export interface Booking_booking_hotel_rooms_rates_cancellationPolicies {
  __typename: "B_CancellationPolicies";
  amount: string | null;
  from: string | null;
}

export interface Booking_booking_hotel_rooms_rates {
  __typename: "B_Rates";
  rateClass: string | null;
  net: string | null;
  discount: string | null;
  discountPCT: string | null;
  sellingRate: string | null;
  rateComments: string | null;
  paymentType: string | null;
  packaging: boolean | null;
  boardCode: string | null;
  boardName: string | null;
  rooms: number | null;
  adults: number | null;
  children: number | null;
  cancellationPolicies: (Booking_booking_hotel_rooms_rates_cancellationPolicies | null)[] | null;
}

export interface Booking_booking_hotel_rooms_paxes {
  __typename: "B_Paxes";
  roomId: number | null;
  type: string | null;
  name: string | null;
  surname: string | null;
}

export interface Booking_booking_hotel_rooms {
  __typename: "B_Rooms";
  status: string | null;
  id: number | null;
  code: string | null;
  name: string | null;
  rates: (Booking_booking_hotel_rooms_rates | null)[] | null;
  paxes: (Booking_booking_hotel_rooms_paxes | null)[] | null;
}

export interface Booking_booking_hotel {
  __typename: "B_Hotel";
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
  cancellationAmount: number | null;
  supplier: Booking_booking_hotel_supplier | null;
  rooms: (Booking_booking_hotel_rooms | null)[] | null;
}

export interface Booking_booking_holder {
  __typename: "B_Holder";
  name: string | null;
  surname: string | null;
}

export interface Booking_booking_modificationPolicies {
  __typename: "B_ModificationPolicies";
  cancellation: boolean | null;
  modification: boolean | null;
}

export interface Booking_booking {
  __typename: "BookingData";
  reference: string | null;
  cancellationReference: string | null;
  clientReference: string | null;
  creationDate: string | null;
  status: string | null;
  creationUser: string | null;
  remark: string | null;
  totalSellingRate: number | null;
  totalNet: number | null;
  pendingAmount: number | null;
  currency: string | null;
  invoiceCompany: Booking_booking_invoiceCompany | null;
  hotel: Booking_booking_hotel | null;
  holder: Booking_booking_holder | null;
  modificationPolicies: Booking_booking_modificationPolicies | null;
}

export interface Booking {
  booking: Booking_booking;
}

export interface BookingVariables {
  input: BookingInput;
}
