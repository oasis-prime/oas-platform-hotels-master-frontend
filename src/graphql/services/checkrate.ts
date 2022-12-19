import { CheckRateQuery, CheckRateQueryVariables } from './generated/checkrate.generated'
import { gql, useLazyQuery } from '@apollo/client'

const CHECK_RATE = gql`
  query CheckRate($input: CheckRateInput!) {
    checkRate(input: $input) {
      checkOut
      checkIn
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
      totalSellingRate
      totalNet
      currency
      paymentDataRequired
      modificationPolicies {
        cancellation
        modification
      }
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
          rateComments
          paymentType
          packaging
          boardCode
          boardName
          rooms
          adults
          children
          offers {
            code
            name
            amount
          }
          rateBreakDown {
            rateDiscounts {
              code
              name
              amount
            }
          }
          cancellationPolicies {
            amount
            from
          }
        }
      }
    }
  }
`

const useCheckRate = () => useLazyQuery<CheckRateQuery, CheckRateQueryVariables>(CHECK_RATE)

export { useCheckRate }