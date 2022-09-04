import { HotelSearch, HotelSearchVariables } from './__generated__/HotelSearch'
import { HotelsAutocomplete, HotelsAutocompleteVariables } from './__generated__/HotelsAutocomplete'
import { gql, useLazyQuery } from '@apollo/client'

const HOTEL_SEARCH = gql`
  query HotelSearch($input: HotelsInput!, $imageOffset: Int!, $imageLimit: Int!, $facilitiesOffset: Int!, $facilitiesLimit: Int!) {
    getHotels(input: $input) {
      hotels {
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
        images (offset: $imageOffset, limit: $imageLimit) {
          imageTypeCode
          path
          order
          visualOrder
        }
        facilities (offset: $facilitiesOffset, limit: $facilitiesLimit) {
          facilityCode
          facilityGroupCode
          order
          number
          voucher
        }
        address {
            content
            street
            number
        }
        name {
          content
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

const useHotels = () => useLazyQuery<HotelSearch, HotelSearchVariables>(HOTEL_SEARCH)
const useHotelsAutocomplete = () => useLazyQuery<HotelsAutocomplete, HotelsAutocompleteVariables>(HOTELS_AUTOCOMPLETE)

export { useHotels, useHotelsAutocomplete }
