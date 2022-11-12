import { PopularSearch, PopularSearchVariables } from './__generated__/PopularSearch'
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

const usePopular = () => useLazyQuery<PopularSearch, PopularSearchVariables>(POPULAR)

export { usePopular }
