import * as Types from '@/types'

export type BookingMutationVariables = Types.Exact<{
  input: Types.BookingInput;
}>;


export type BookingMutation = { __typename?: 'Mutation', booking: { __typename?: 'Booking', reference?: string | null, cancellationReference?: string | null, clientReference?: string | null, creationDate?: string | null, status?: string | null, creationUser?: string | null, remark?: string | null, totalSellingRate?: number | null, totalNet?: number | null, pendingAmount?: number | null, currency?: string | null, invoiceCompany?: { __typename?: 'B_InvoiceCompany', code?: string | null, company?: string | null, registrationNumber?: string | null } | null, hotel?: { __typename?: 'B_Hotel', checkOut?: string | null, checkIn?: string | null, code?: number | null, name?: string | null, categoryCode?: string | null, categoryName?: string | null, destinationCode?: string | null, destinationName?: string | null, zoneCode?: number | null, zoneName?: string | null, latitude?: string | null, longitude?: string | null, totalSellingRate?: string | null, totalNet?: string | null, currency?: string | null, cancellationAmount?: number | null, supplier?: { __typename?: 'B_Supplier', name?: string | null, vatNumber?: string | null } | null, rooms?: Array<{ __typename?: 'B_Rooms', status?: string | null, id?: number | null, code?: string | null, name?: string | null, rates?: Array<{ __typename?: 'B_Rates', rateClass?: string | null, net?: string | null, discount?: string | null, discountPCT?: string | null, sellingRate?: string | null, rateComments?: string | null, paymentType?: string | null, packaging?: boolean | null, boardCode?: string | null, boardName?: string | null, rooms?: number | null, adults?: number | null, children?: number | null, cancellationPolicies?: Array<{ __typename?: 'B_CancellationPolicies', amount?: string | null, from?: string | null } | null> | null } | null> | null, paxes?: Array<{ __typename?: 'B_Paxes', roomId?: number | null, type?: string | null, name?: string | null, surname?: string | null } | null> | null } | null> | null } | null, holder?: { __typename?: 'B_Holder', name?: string | null, surname?: string | null } | null, modificationPolicies?: { __typename?: 'B_ModificationPolicies', cancellation?: boolean | null, modification?: boolean | null } | null } };
