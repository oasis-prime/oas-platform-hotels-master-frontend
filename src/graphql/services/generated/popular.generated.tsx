import * as Types from '@/types'

export type PopularSearchQueryVariables = Types.Exact<{
  input: Types.GetPopularInput;
}>;


export type PopularSearchQuery = { __typename?: 'Query', getAllPopular: { __typename?: 'PopularData', data: Array<{ __typename?: 'Popular', name?: string | null, image?: string | null, link?: string | null, count?: number | null, status?: string | null, createdAt?: string | null, updatedAt?: string | null }>, pagination: { __typename?: 'PaginationType', page: number, pageSize: number, total: number } } };
