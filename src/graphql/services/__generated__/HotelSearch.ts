/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ImagesInput, FacilitiesInput, HotelsInput, LanguageEnum, HotelTypeEnum } from "./../../../../__generated__/globalTypes";

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
  facilityName: string | null;
  facilityCode: number | null;
  facilityGroupName: string | null;
  facilityGroupCode: number | null;
  order: number | null;
  number: number | null;
  voucher: boolean | null;
}

export interface HotelSearch_getHotels_hotels_city {
  __typename: "City";
  content: string | null;
}

export interface HotelSearch_getHotels_hotels_address {
  __typename: "Address";
  content: string | null;
  street: string | null;
  number: string | null;
}

export interface HotelSearch_getHotels_hotels_coordinates {
  __typename: "Coordinates";
  longitude: number | null;
  latitude: number | null;
}

export interface HotelSearch_getHotels_hotels {
  __typename: "Hotels";
  hotelName: string | null;
  language: LanguageEnum;
  code: number | null;
  type: HotelTypeEnum;
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
  city: HotelSearch_getHotels_hotels_city | null;
  address: HotelSearch_getHotels_hotels_address | null;
  amenityCodes: (number | null)[] | null;
  segmentCodes: (number | null)[] | null;
  boardCodes: (string | null)[] | null;
  coordinates: HotelSearch_getHotels_hotels_coordinates | null;
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
  imagesInput?: ImagesInput | null;
  facilitiesInput?: FacilitiesInput | null;
  hotelsInput: HotelsInput;
}
