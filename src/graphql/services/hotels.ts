import { HotelSearch, HotelSearchVariables } from './__generated__/HotelSearch'
import {
  HotelsAutocomplete,
  HotelsAutocompleteVariables,
} from './__generated__/HotelsAutocomplete'
import { gql, useLazyQuery } from '@apollo/client'

const HOTEL_SEARCH = gql`
  query HotelSearch(
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

const useHotels = () =>
  useLazyQuery<HotelSearch, HotelSearchVariables>(HOTEL_SEARCH)
const useHotelsAutocomplete = () =>
  useLazyQuery<HotelsAutocomplete, HotelsAutocompleteVariables>(
    HOTELS_AUTOCOMPLETE,
  )

export { useHotels, useHotelsAutocomplete }
