import * as Types from '@/types';

export type AvailabilitySearchQueryVariables = Types.Exact<{
  input: Types.AvailabilityInput;
}>;


export type AvailabilitySearchQuery = { __typename?: 'Query', getAvailability: { __typename?: 'AvailabilityData', availability: Array<{ __typename?: 'AvailabilityHotels', code?: number | null, name?: string | null, categoryCode?: string | null, categoryName?: string | null, destinationCode?: string | null, destinationName?: string | null, zoneCode?: number | null, zoneName?: string | null, latitude?: string | null, longitude?: string | null, minRate?: string | null, maxRate?: string | null, currency?: string | null, rooms?: Array<{ __typename?: 'AvailabilityRooms', code?: string | null, name?: string | null, rates?: Array<{ __typename?: 'AvailabilityRates', rateKey?: string | null, rateClass?: string | null, rateType?: string | null, net?: string | null, discount?: string | null, discountPCT?: string | null, sellingRate?: string | null, allotment?: number | null, paymentType?: string | null, packaging?: boolean | null, boardCode?: string | null, boardName?: string | null, rooms?: number | null, adults?: number | null, children?: number | null, cancellationPolicies?: Array<{ __typename?: 'AvailabilityCancellationPolicies', amount?: string | null, from?: string | null } | null> | null } | null> | null } | null> | null }> } };
