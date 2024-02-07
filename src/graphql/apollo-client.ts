import { ApolloClient, InMemoryCache, HttpLink } from "@apollo/client/core"
import { onError } from "@apollo/client/link/error"
import { logErrorMessages } from "@vue/apollo-util"

const httpLink = new HttpLink({
  uri: "https://beta.pokeapi.co/graphql/v1beta",
})

const errorLink = onError((error) => {
  if (process.env.NODE_ENV !== "production") {
    logErrorMessages(error)
  }
})

export const apolloClient = new ApolloClient({
  cache: new InMemoryCache(),
  link: errorLink.concat(httpLink),
})
