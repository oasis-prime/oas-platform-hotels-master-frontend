import { ErrorLink, onError } from "@apollo/client/link/error";

import { AppConfig } from "@utils/app.config";
import { createHttpLink } from "@apollo/client";
import { setContext } from "@apollo/client/link/context";

export const linkAuth = createHttpLink({
  uri: AppConfig.graphqlBaseUrl,
  credentials: "same-origin",
});

export const linkMain = createHttpLink({
  uri: AppConfig.graphqlBaseUrl,
  credentials: "same-origin",
});

export const linkTokenHeader = setContext(async (_, { headers }) => {
  // const accessToken = await getAccessTokenPromise()
  const accessToken = "";
  return {
    headers: {
      ...headers,
      Authorization: accessToken ? `Bearer ${accessToken}` : "",
    },
  };
});

export const errorHandler: ErrorLink.ErrorHandler = ({
  graphQLErrors,
  networkError,
}) => {
  if (graphQLErrors)
    graphQLErrors.forEach(({ message }) => {
      // console.log(message)
    });
  if (networkError) {
    // console.log(networkError)
  }
  // response.errors = undefined
};

export const linkError = onError(errorHandler);
