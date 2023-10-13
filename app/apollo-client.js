import { ApolloClient, InMemoryCache } from "@apollo/client";

const createApolloClient = () => {
  return new ApolloClient({
    uri: "https://cloud-api.vbreddy.dev/graphql",
    cache: new InMemoryCache(),
  });
};

export default createApolloClient;
