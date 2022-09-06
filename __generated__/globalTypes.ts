/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum HotelTypeEnum {
  CG = "CG",
  DE = "DE",
  HB = "HB",
}

export enum LanguageEnum {
  ENG = "ENG",
  TAI = "TAI",
}

export interface FacilitiesInput {
  groupCode: number;
  offset: number;
  limit: number;
}

export interface HotelsGeolocationInput {
  latitude: number;
  longitude: number;
  radius: number;
}

export interface HotelsInput {
  language: LanguageEnum;
  pagination: PaginationInput;
  geolocation?: HotelsGeolocationInput | null;
  keywords?: HotelsKeywordsInput | null;
  id?: number | null;
  IsPrice?: boolean | null;
  occupancies: HotelsOccupanciesInput;
}

export interface HotelsKeywordsInput {
  keyword: string[];
}

export interface HotelsOccupanciesInput {
  rooms: number;
  adults: number;
  children: number;
}

export interface ImagesInput {
  typeCode: string;
  offset: number;
  limit: number;
}

export interface PaginationInput {
  page: number;
  pageSize: number;
  orderBy?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
