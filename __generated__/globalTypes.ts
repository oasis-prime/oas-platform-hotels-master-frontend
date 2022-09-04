/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

//==============================================================
// START Enums and Input Objects
//==============================================================

export enum LanguageEnum {
  ENG = "ENG",
  TAI = "TAI",
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
  id?: number;
}

export interface HotelsKeywordsInput {
  keyword: string[];
}

export interface PaginationInput {
  page: number;
  pageSize: number;
  orderBy?: string | null;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
