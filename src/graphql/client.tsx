import { ApolloClient, ApolloLink, InMemoryCache } from '@apollo/client'
import { linkAuth, linkError, linkMain, linkTokenHeader } from './link'

export const apolloClientMain = new ApolloClient({
  ssrMode: true,
  link: ApolloLink.from([linkError, linkTokenHeader, linkMain]),
  cache: new InMemoryCache({
    addTypename: false
  }),
  connectToDevTools: true
})

const inMemoryCache = new InMemoryCache()
export const apolloClientNonToken = new ApolloClient({
  // headers: {
  //   AllowOrigins: '*'
  // },
  link: linkAuth,
  cache: inMemoryCache
})
