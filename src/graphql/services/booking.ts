import { gql } from '@apollo/client'

const BOOKING_INSERT = gql`
  mutation Booking($input: BookingInput!) {
    booking(input: $input) {
      reference
      cancellationReference
      clientReference
      creationDate
      status
      creationUser
      remark
      totalSellingRate
      totalNet
      pendingAmount
      currency
      invoiceCompany {
        code
        company
        registrationNumber
      }
      hotel {
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
        cancellationAmount
        supplier {
          name
          vatNumber
        }
        rooms {
          status
          id
          code
          name
          rates {
            rateClass
            net
            discount
            discountPCT
            sellingRate
            rateComments
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
          paxes {
            roomId
            type
            name
            surname
          }
        }
      }
      holder {
        name
        surname
      }
      modificationPolicies {
        cancellation
        modification
      }
    }
  }
`

export { BOOKING_INSERT }