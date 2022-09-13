/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { HotelsInput, LanguageEnum } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: HotelsAutocomplete
// ====================================================

export interface HotelsAutocomplete_getHotels_hotels {
  __typename: "Hotel";
  hotelName: string | null;
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
}

export interface HotelsAutocomplete_getHotels_pagination {
  __typename: "PaginationType";
  page: number;
  pageSize: number;
  total: number;
}

export interface HotelsAutocomplete_getHotels {
  __typename: "HotelsData";
  hotels: HotelsAutocomplete_getHotels_hotels[];
  pagination: HotelsAutocomplete_getHotels_pagination;
}

export interface HotelsAutocomplete {
  getHotels: HotelsAutocomplete_getHotels;
}

export interface HotelsAutocompleteVariables {
  input: HotelsInput;
}
