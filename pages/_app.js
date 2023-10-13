import { ApolloProvider } from "@apollo/client";
import createApolloClient from "@/app/apollo-client";
import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  const client = createApolloClient();
  const getLayout = Component.getLayout || ((page) => page);
  return (
    <>
      <ApolloProvider client={client}>
        {getLayout(<Component {...pageProps} />)}
      </ApolloProvider>
    </>
  );
}
