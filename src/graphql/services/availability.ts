import { AvailabilitySearchQuery, AvailabilitySearchQueryVariables } from './generated/availability.generated'
import { gql, useLazyQuery } from '@apollo/client'

const AVAILABILITY_SEARCH = gql`
  query AvailabilitySearch($input: AvailabilityInput!) {
    getAvailability(input: $input) {
      availability {
        code
        name
        categoryCode
        categoryName
        destinationCode
        destinationName
        zoneCode
        zoneName
        latitude
        longitude
        minRate
        maxRate
        currency
        rooms {
          code
          name
          rates {
            rateKey
            rateClass
            rateType
            net
            discount
            discountPCT
            sellingRate
            allotment
            paymentType
            packaging
            boardCode
            boardName
            rooms
            adults
            children
            cancellationPolicies {
              amount
              from
            }
          }
        }
      }
    }
  }
`

const useAvailability = () => useLazyQuery<AvailabilitySearchQuery, AvailabilitySearchQueryVariables>(AVAILABILITY_SEARCH)

export { useAvailability }