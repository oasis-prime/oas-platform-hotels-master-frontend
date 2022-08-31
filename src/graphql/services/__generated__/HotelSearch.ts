/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HotelsInput, LanguageEnum } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: HotelSearch
// ====================================================

export interface HotelSearch_getHotels_hotels_images {
  __typename: "Images";
  imageTypeCode: string | null;
  path: string | null;
  order: number | null;
  visualOrder: number | null;
}

export interface HotelSearch_getHotels_hotels_facilities {
  __typename: "Facilities";
  facilityCode: number | null;
  facilityGroupCode: number | null;
  order: number | null;
  number: number | null;
  voucher: boolean | null;
}

export interface HotelSearch_getHotels_hotels_name {
  __typename: "Name";
  content: string | null;
}

export interface HotelSearch_getHotels_hotels {
  __typename: "Hotels";
  language: LanguageEnum;
  code: number | null;
  countryCode: string | null;
  stateCode: string | null;
  destinationCode: string | null;
  zoneCode: number | null;
  categoryCode: string | null;
  categoryGroupCode: string | null;
  chainCode: string | null;
  accommodationTypeCode: string | null;
  postalCode: string | null;
  email: string | null;
  web: string | null;
  lastUpdate: string | null;
  S2C: string | null;
  ranking: number | null;
  images: (HotelSearch_getHotels_hotels_images | null)[] | null;
  facilities: (HotelSearch_getHotels_hotels_facilities | null)[] | null;
  name: HotelSearch_getHotels_hotels_name | null;
}

export interface HotelSearch_getHotels_pagination {
  __typename: "PaginationType";
  page: number;
  pageSize: number;
  total: number;
}

export interface HotelSearch_getHotels {
  __typename: "HotelsData";
  hotels: HotelSearch_getHotels_hotels[];
  pagination: HotelSearch_getHotels_pagination;
}

export interface HotelSearch {
  getHotels: HotelSearch_getHotels;
}

export interface HotelSearchVariables {
  input: HotelsInput;
}
