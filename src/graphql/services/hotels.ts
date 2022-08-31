import { gql } from '@apollo/client'

const hotels = gql`
  query HotelSearch($input: HotelsInput!) {
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
        images {
          imageTypeCode
          path
          order
          visualOrder
        }
        # interestPoints {
        #     facilityCode
        #     facilityGroupCode
        #     order
        #     poiName
        #     distance
        # }
        # issues {
        #     issueCode
        #     issueType
        #     dateFrom
        #     dateTo
        #     order
        #     alternative
        # }
        facilities {
          facilityCode
          facilityGroupCode
          order
          number
          voucher
        }
        # rooms {
        #     roomCode
        #     isParentRoom
        #     minPax
        #     maxPax
        #     maxAdults
        #     maxChildren
        #     minAdults
        #     roomType
        #     characteristicCode
        #     roomStays {
        #         stayType
        #         order
        #         description
        #         roomStayFacilities {
        #             facilityCode
        #             facilityGroupCode
        #             number
        #         }
        #     }
        #     roomFacilities {
        #         facilityCode
        #         facilityGroupCode
        #         indLogic
        #         number
        #         voucher
        #     }
        # }
        # phones {
        #     phoneNumber
        #     phoneType
        # }
        # city {
        #     content
        # }
        # address {
        #     content
        #     street
        #     number
        # }
        # amenityCodes
        # segmentCodes
        # boardCodes
        # coordinates {
        #     longitude
        #     latitude
        # }
        # description {
        #     content
        # }
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

export { hotels }
