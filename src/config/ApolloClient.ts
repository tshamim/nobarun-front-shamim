import { ApolloClient, InMemoryCache } from "@apollo/client";

const isServer = typeof window === "undefined";

const apiUrl = isServer
  ? process.env.NEXT_PUBLIC_SSR_API_URL || "http://localhost:4500/graphql"
  : process.env.NEXT_PUBLIC_API_URL || "http://localhost:4500/graphql";

console.log(`[ApolloClient] isServer: ${isServer}, Using API URL: ${apiUrl}`);

const client = new ApolloClient({
  uri: apiUrl,
  cache: new InMemoryCache(),
});

export default client;