import {
  GetKeywordQuery,
  GetKeywordQueryVariables,
  HotelSearchQuery,
  HotelSearchQueryVariables,
  HotelsAutocompleteQuery,
  HotelsAutocompleteQueryVariables,
  HotelsSearchQuery,
  HotelsSearchQueryVariables,
} from './generated/hotels.generated'
import { gql, useLazyQuery } from '@apollo/client'

const HOTEL_SEARCH = gql`
  query HotelSearch(
    $hotelImagesInput: ImagesInput
    $hotelInterestPointsInput: HotelInterestPointsInput
    $hotelIssuesInput: HotelIssuesInput
    $hotelFacilitiesInput: FacilitiesInput
    $staysInput: StaysInput
    $roomFacilitiesInput: FacilitiesInput
    $roomImages: ImagesInput
    $hotelRoomsInput: HotelRoomsInput
    $hotelPhonesInput: HotelPhonesInput
    $hotelInput: HotelInput!
  ) {
    getHotel(input: $hotelInput) {
      hotelName
      language
      code
      type
      countryCode
      stateCode
      destinationCode
      zoneCode
      categoryCode
      categoryGroupCode
      chainCode
      accommodationTypeCode
      postalCode
      email
      web
      lastUpdate
      S2C
      ranking
      images(input: $hotelImagesInput) {
        imageTypeCode
        path
        order
        visualOrder
      }
      interestPoints(input: $hotelInterestPointsInput) {
        facilityCode
        facilityGroupCode
        order
        poiName
        distance
      }
      issues(input: $hotelIssuesInput) {
        issueCode
        issueType
        dateFrom
        dateTo
        order
        alternative
      }
      facilities(input: $hotelFacilitiesInput) {
        facilityName
        facilityCode
        facilityGroupName
        facilityGroupCode
        order
        number
        voucher
      }
      rooms(input: $hotelRoomsInput) {
        hotelCode
        hotelType
        roomCode
        isParentRoom
        minPax
        maxPax
        maxAdults
        maxChildren
        minAdults
        roomType
        characteristicCode
        roomStays(input: $staysInput) {
          stayType
          order
          description
          roomStayFacilities {
            facilityName
            facilityCode
            facilityGroupName
            facilityGroupCode
            number
          }
        }
        roomFacilities(input: $roomFacilitiesInput) {
          facilityName
          facilityCode
          facilityGroupName
          facilityGroupCode
          indLogic
          number
          voucher
        }
        roomImages(input: $roomImages) {
          imageTypeCode
          path
          order
          visualOrder
        }
      }
      phones(input: $hotelPhonesInput) {
        phoneNumber
        phoneType
      }
      city {
        content
      }
      address {
        content
        street
        number
      }
      amenityCodes
      segmentCodes
      boardCodes
      coordinates {
        longitude
        latitude
      }
      description {
        content
      }
      name {
        content
      }
    }
  }
`

const HOTELS_SEARCH = gql`
  query HotelsSearch(
    $imagesInput: ImagesInput
    $facilitiesInput: FacilitiesInput
    $hotelsInput: HotelsInput!
  ) {
    getHotels(input: $hotelsInput) {
      hotels {
        hotelName
        language
        code
        type
        countryCode
        stateCode
        destinationCode
        zoneCode
        categoryCode
        categoryGroupCode
        chainCode
        accommodationTypeCode
        postalCode
        email
        web
        lastUpdate
        S2C
        ranking
        images(input: $imagesInput) {
          imageTypeCode
          path
          order
          visualOrder
        }
        facilities(input: $facilitiesInput) {
          facilityName
          facilityCode
          facilityGroupName
          facilityGroupCode
          order
          number
          voucher
        }
        city {
          content
        }
        address {
          content
          street
          number
        }
        amenityCodes
        segmentCodes
        boardCodes
        coordinates {
          longitude
          latitude
        }
      }
      pagination {
        page
        pageSize
        total
      }
    }
  }
`

const HOTELS_AUTOCOMPLETE = gql`
  query HotelsAutocomplete($input: HotelsInput!) {
    getHotels(input: $input) {
      hotels {
        queryBy
        hotelCity
        hotelName
        language
        code
        countryCode
        stateCode
        destinationCode
        zoneCode
        categoryCode
        categoryGroupCode
        chainCode
        accommodationTypeCode
        postalCode
        email
        web
        lastUpdate
        S2C
        ranking
      }
      pagination {
        page
        pageSize
        total
      }
    }
  }
`

const GET_KEYWORD = gql`
  query GetKeyword($input: KeywordInput!) {
    getKeyword(input: $input) {
      __typename
      keyword {
        name
        queryBy
        latitude
        longitude
        radius
      }
    }
  }
`

const useHotel = () =>
  useLazyQuery<HotelSearchQuery, HotelSearchQueryVariables>(HOTEL_SEARCH)

const useHotels = () =>
  useLazyQuery<HotelsSearchQuery, HotelsSearchQueryVariables>(HOTELS_SEARCH)

const useHotelsAutocomplete = () =>
  useLazyQuery<HotelsAutocompleteQuery, HotelsAutocompleteQueryVariables>(
    HOTELS_AUTOCOMPLETE,
  )

const useKeywordAutocomplete = () =>
  useLazyQuery<GetKeywordQuery, GetKeywordQueryVariables>(
    GET_KEYWORD,
  )

export { useHotel, useHotels, useHotelsAutocomplete, useKeywordAutocomplete }
