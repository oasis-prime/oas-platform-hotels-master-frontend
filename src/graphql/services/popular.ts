import { PopularSearchQuery, PopularSearchQueryVariables } from './generated/popular.generated'
import { gql, useLazyQuery, useMutation, useQuery } from '@apollo/client'

const POPULAR = gql`
  query PopularSearch($input: GetPopularInput!) {
    getAllPopular(input: $input) {
      data {
        name
        image
        link
        count
        status
        createdAt
        updatedAt
      }
      pagination {
        page
        pageSize
        total
      }
    }
  }
`

const usePopular = () => useLazyQuery<PopularSearchQuery, PopularSearchQueryVariables>(POPULAR)

export { usePopular }
