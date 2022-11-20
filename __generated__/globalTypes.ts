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

export interface AvailabilityFilterInput {
  maxHotels?: number | null;
  maxRooms?: number | null;
  minRate?: number | null;
  maxRate?: number | null;
  maxRatesPerRoom?: number | null;
}

export interface AvailabilityHotelInput {
  hotel: number[];
}

export interface AvailabilityInput {
  hotels: AvailabilityHotelInput;
  stay: AvailabilityStayInput;
  occupancies: AvailabilityOccupanciesInput[];
  language: LanguageEnum;
  filter?: AvailabilityFilterInput | null;
}

export interface AvailabilityOccupanciesInput {
  rooms: number;
  adults: number;
  children: number;
}

export interface AvailabilityStayInput {
  checkIn: string;
  checkOut: string;
}

export interface BookingInput {
  clientReference?: string | null;
  language: LanguageEnum;
}

export interface CheckRateInput {
  rateKey: string;
  language: LanguageEnum;
}

export interface FacilitiesInput {
  groupCode: number;
  offset: number;
  limit: number;
  language: LanguageEnum;
}

export interface GetPopularInput {
  language: LanguageEnum;
  pagination: PaginationInput;
}

export interface HotelInput {
  language: LanguageEnum;
  code: number;
}

export interface HotelInterestPointsInput {
  offset: number;
  limit: number;
}

export interface HotelIssuesInput {
  offset: number;
  limit: number;
}

export interface HotelPhonesInput {
  offset: number;
  limit: number;
}

export interface HotelRoomsInput {
  roomCode?: string[] | null;
  offset?: number | null;
  limit?: number | null;
  language: LanguageEnum;
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
  occupancies?: HotelsOccupanciesInput | null;
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

export interface MemberRegisterInput {
  display: string;
  email: string;
  password: string;
}

export interface PaginationInput {
  page: number;
  pageSize: number;
  orderBy?: string | null;
}

export interface PaymentInput {
  email: string;
  name: string;
  surname: string;
  phoneNumber: string;
  rateKey: string;
}

export interface StaysInput {
  offset: number;
  limit: number;
}

//==============================================================
// END Enums and Input Objects
//==============================================================
