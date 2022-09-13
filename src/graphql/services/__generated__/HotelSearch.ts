/* tslint:disable */
/* eslint-disable */
// @generated
// This file was automatically generated and should not be edited.

import { ImagesInput, HotelInterestPointsInput, HotelIssuesInput, FacilitiesInput, StaysInput, HotelRoomsInput, HotelPhonesInput, HotelInput, LanguageEnum, HotelTypeEnum } from "./../../../../__generated__/globalTypes";

// ====================================================
// GraphQL query operation: HotelSearch
// ====================================================

export interface HotelSearch_getHotel_images {
  __typename: "Images";
  imageTypeCode: string | null;
  path: string | null;
  order: number | null;
  visualOrder: number | null;
}

export interface HotelSearch_getHotel_interestPoints {
  __typename: "InterestPoints";
  facilityCode: number | null;
  facilityGroupCode: number | null;
  order: number | null;
  poiName: string | null;
  distance: string | null;
}

export interface HotelSearch_getHotel_issues {
  __typename: "Issues";
  issueCode: string | null;
  issueType: string | null;
  dateFrom: string | null;
  dateTo: string | null;
  order: number | null;
  alternative: boolean | null;
}

export interface HotelSearch_getHotel_facilities {
  __typename: "Facilities";
  facilityName: string | null;
  facilityCode: number | null;
  facilityGroupName: string | null;
  facilityGroupCode: number | null;
  order: number | null;
  number: number | null;
  voucher: boolean | null;
}

export interface HotelSearch_getHotel_rooms_roomStays_roomStayFacilities {
  __typename: "RoomStayFacilities";
  facilityName: string | null;
  facilityCode: number | null;
  facilityGroupName: string | null;
  facilityGroupCode: number | null;
  number: number | null;
}

export interface HotelSearch_getHotel_rooms_roomStays {
  __typename: "RoomStays";
  stayType: string | null;
  order: string | null;
  description: string | null;
  roomStayFacilities: (HotelSearch_getHotel_rooms_roomStays_roomStayFacilities | null)[] | null;
}

export interface HotelSearch_getHotel_rooms_roomFacilities {
  __typename: "RoomFacilities";
  facilityName: string | null;
  facilityCode: number | null;
  facilityGroupName: string | null;
  facilityGroupCode: number | null;
  indLogic: boolean | null;
  number: number | null;
  voucher: boolean | null;
}

export interface HotelSearch_getHotel_rooms_roomImages {
  __typename: "Images";
  imageTypeCode: string | null;
  path: string | null;
  order: number | null;
  visualOrder: number | null;
}

export interface HotelSearch_getHotel_rooms {
  __typename: "Rooms";
  hotelCode: number | null;
  hotelType: HotelTypeEnum;
  roomCode: string | null;
  isParentRoom: boolean | null;
  minPax: number | null;
  maxPax: number | null;
  maxAdults: number | null;
  maxChildren: number | null;
  minAdults: number | null;
  roomType: string | null;
  characteristicCode: string | null;
  roomStays: (HotelSearch_getHotel_rooms_roomStays | null)[] | null;
  roomFacilities: (HotelSearch_getHotel_rooms_roomFacilities | null)[] | null;
  roomImages: (HotelSearch_getHotel_rooms_roomImages | null)[] | null;
}

export interface HotelSearch_getHotel_phones {
  __typename: "Phones";
  phoneNumber: string | null;
  phoneType: string | null;
}

export interface HotelSearch_getHotel_city {
  __typename: "City";
  content: string | null;
}

export interface HotelSearch_getHotel_address {
  __typename: "Address";
  content: string | null;
  street: string | null;
  number: string | null;
}

export interface HotelSearch_getHotel_coordinates {
  __typename: "Coordinates";
  longitude: number | null;
  latitude: number | null;
}

export interface HotelSearch_getHotel_description {
  __typename: "Description";
  content: string | null;
}

export interface HotelSearch_getHotel_name {
  __typename: "Name";
  content: string | null;
}

export interface HotelSearch_getHotel {
  __typename: "Hotel";
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
  images: (HotelSearch_getHotel_images | null)[] | null;
  interestPoints: (HotelSearch_getHotel_interestPoints | null)[] | null;
  issues: (HotelSearch_getHotel_issues | null)[] | null;
  facilities: (HotelSearch_getHotel_facilities | null)[] | null;
  rooms: (HotelSearch_getHotel_rooms | null)[] | null;
  phones: (HotelSearch_getHotel_phones | null)[] | null;
  city: HotelSearch_getHotel_city | null;
  address: HotelSearch_getHotel_address | null;
  amenityCodes: (number | null)[] | null;
  segmentCodes: (number | null)[] | null;
  boardCodes: (string | null)[] | null;
  coordinates: HotelSearch_getHotel_coordinates | null;
  description: HotelSearch_getHotel_description | null;
  name: HotelSearch_getHotel_name | null;
}

export interface HotelSearch {
  getHotel: HotelSearch_getHotel;
}

export interface HotelSearchVariables {
  hotelImagesInput?: ImagesInput | null;
  hotelInterestPointsInput?: HotelInterestPointsInput | null;
  hotelIssuesInput?: HotelIssuesInput | null;
  hotelFacilitiesInput?: FacilitiesInput | null;
  staysInput?: StaysInput | null;
  roomFacilitiesInput?: FacilitiesInput | null;
  roomImages?: ImagesInput | null;
  hotelRoomsInput?: HotelRoomsInput | null;
  hotelPhonesInput?: HotelPhonesInput | null;
  hotelInput: HotelInput;
}
