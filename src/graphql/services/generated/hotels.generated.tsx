import * as Types from '@/types'

export type HotelSearchQueryVariables = Types.Exact<{
  hotelImagesInput?: Types.InputMaybe<Types.ImagesInput>;
  hotelInterestPointsInput?: Types.InputMaybe<Types.HotelInterestPointsInput>;
  hotelIssuesInput?: Types.InputMaybe<Types.HotelIssuesInput>;
  hotelFacilitiesInput?: Types.InputMaybe<Types.FacilitiesInput>;
  staysInput?: Types.InputMaybe<Types.StaysInput>;
  roomFacilitiesInput?: Types.InputMaybe<Types.FacilitiesInput>;
  roomImages?: Types.InputMaybe<Types.ImagesInput>;
  hotelRoomsInput?: Types.InputMaybe<Types.HotelRoomsInput>;
  hotelPhonesInput?: Types.InputMaybe<Types.HotelPhonesInput>;
  hotelInput: Types.HotelInput;
}>;


export type HotelSearchQuery = { __typename?: 'Query', getHotel: { __typename?: 'Hotel', hotelName?: string | null, language: Types.LanguageEnum, code?: number | null, type: Types.HotelTypeEnum, countryCode?: string | null, stateCode?: string | null, destinationCode?: string | null, zoneCode?: number | null, categoryCode?: string | null, categoryGroupCode?: string | null, chainCode?: string | null, accommodationTypeCode?: string | null, postalCode?: string | null, email?: string | null, web?: string | null, lastUpdate?: string | null, S2C?: string | null, ranking?: number | null, amenityCodes?: Array<number | null> | null, segmentCodes?: Array<number | null> | null, boardCodes?: Array<string | null> | null, images?: Array<{ __typename?: 'Images', imageTypeCode?: string | null, path?: string | null, order?: number | null, visualOrder?: number | null } | null> | null, interestPoints?: Array<{ __typename?: 'InterestPoints', facilityCode?: number | null, facilityGroupCode?: number | null, order?: number | null, poiName?: string | null, distance?: string | null } | null> | null, issues?: Array<{ __typename?: 'Issues', issueCode?: string | null, issueType?: string | null, dateFrom?: string | null, dateTo?: string | null, order?: number | null, alternative?: boolean | null } | null> | null, facilities?: Array<{ __typename?: 'Facilities', facilityName?: string | null, facilityCode?: number | null, facilityGroupName?: string | null, facilityGroupCode?: number | null, order?: number | null, number?: number | null, voucher?: boolean | null } | null> | null, rooms?: Array<{ __typename?: 'Rooms', hotelCode?: number | null, hotelType: Types.HotelTypeEnum, roomCode?: string | null, isParentRoom?: boolean | null, minPax?: number | null, maxPax?: number | null, maxAdults?: number | null, maxChildren?: number | null, minAdults?: number | null, roomType?: string | null, characteristicCode?: string | null, roomStays?: Array<{ __typename?: 'RoomStays', stayType?: string | null, order?: string | null, description?: string | null, roomStayFacilities?: Array<{ __typename?: 'RoomStayFacilities', facilityName?: string | null, facilityCode?: number | null, facilityGroupName?: string | null, facilityGroupCode?: number | null, number?: number | null } | null> | null } | null> | null, roomFacilities?: Array<{ __typename?: 'RoomFacilities', facilityName?: string | null, facilityCode?: number | null, facilityGroupName?: string | null, facilityGroupCode?: number | null, indLogic?: boolean | null, number?: number | null, voucher?: boolean | null } | null> | null, roomImages?: Array<{ __typename?: 'Images', imageTypeCode?: string | null, path?: string | null, order?: number | null, visualOrder?: number | null } | null> | null } | null> | null, phones?: Array<{ __typename?: 'Phones', phoneNumber?: string | null, phoneType?: string | null } | null> | null, city?: { __typename?: 'City', content?: string | null } | null, address?: { __typename?: 'Address', content?: string | null, street?: string | null, number?: string | null } | null, coordinates?: { __typename?: 'Coordinates', longitude?: number | null, latitude?: number | null } | null, description?: { __typename?: 'Description', content?: string | null } | null, name?: { __typename?: 'Name', content?: string | null } | null } };

export type HotelsSearchQueryVariables = Types.Exact<{
  imagesInput?: Types.InputMaybe<Types.ImagesInput>;
  facilitiesInput?: Types.InputMaybe<Types.FacilitiesInput>;
  hotelsInput: Types.HotelsInput;
}>;


export type HotelsSearchQuery = { __typename?: 'Query', getHotels: { __typename?: 'HotelsData', hotels: Array<{ __typename?: 'Hotel', hotelName?: string | null, language: Types.LanguageEnum, code?: number | null, type: Types.HotelTypeEnum, countryCode?: string | null, stateCode?: string | null, destinationCode?: string | null, zoneCode?: number | null, categoryCode?: string | null, categoryGroupCode?: string | null, chainCode?: string | null, accommodationTypeCode?: string | null, postalCode?: string | null, email?: string | null, web?: string | null, lastUpdate?: string | null, S2C?: string | null, ranking?: number | null, amenityCodes?: Array<number | null> | null, segmentCodes?: Array<number | null> | null, boardCodes?: Array<string | null> | null, images?: Array<{ __typename?: 'Images', imageTypeCode?: string | null, path?: string | null, order?: number | null, visualOrder?: number | null } | null> | null, facilities?: Array<{ __typename?: 'Facilities', facilityName?: string | null, facilityCode?: number | null, facilityGroupName?: string | null, facilityGroupCode?: number | null, order?: number | null, number?: number | null, voucher?: boolean | null } | null> | null, city?: { __typename?: 'City', content?: string | null } | null, address?: { __typename?: 'Address', content?: string | null, street?: string | null, number?: string | null } | null, coordinates?: { __typename?: 'Coordinates', longitude?: number | null, latitude?: number | null } | null }>, pagination: { __typename?: 'PaginationType', page: number, pageSize: number, total: number } } };

export type HotelsAutocompleteQueryVariables = Types.Exact<{
  input: Types.HotelsInput;
}>;


export type HotelsAutocompleteQuery = { __typename?: 'Query', getHotels: { __typename?: 'HotelsData', hotels: Array<{ __typename?: 'Hotel', queryBy?: string | null, hotelCity?: string | null, hotelName?: string | null, language: Types.LanguageEnum, code?: number | null, countryCode?: string | null, stateCode?: string | null, destinationCode?: string | null, zoneCode?: number | null, categoryCode?: string | null, categoryGroupCode?: string | null, chainCode?: string | null, accommodationTypeCode?: string | null, postalCode?: string | null, email?: string | null, web?: string | null, lastUpdate?: string | null, S2C?: string | null, ranking?: number | null }>, pagination: { __typename?: 'PaginationType', page: number, pageSize: number, total: number } } };

export type GetKeywordQueryVariables = Types.Exact<{
  input: Types.KeywordInput;
}>;


export type GetKeywordQuery = { __typename?: 'Query', getKeyword: { __typename: 'KeywordData', keyword: Array<{ __typename?: 'Keyword', name?: string | null, queryBy?: string | null, latitude: number, longitude: number, radius: number }> } };
