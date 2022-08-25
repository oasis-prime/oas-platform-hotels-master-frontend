import {
  ApolloClient,
  ApolloProvider,
  NormalizedCacheObject,
} from "@apollo/client";

import React from "react";
import { apolloClientMain } from "./client";

type Props = {
  children?: React.ReactNode;
};

const ApolloProviderWithJWT: React.FC<Props> = ({ children }) => {
  const client = React.useRef<ApolloClient<NormalizedCacheObject>>();

  if (!client.current) {
    client.current = apolloClientMain;
  }

  return <ApolloProvider client={client.current}>{children}</ApolloProvider>;
};

export { ApolloProviderWithJWT };
