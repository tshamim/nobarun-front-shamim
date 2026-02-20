import { GraphQLClient } from 'graphql-request';

const isServer = typeof window === 'undefined';
const apiUrl = isServer
  ? process.env.NEXT_PUBLIC_SSR_API_URL || process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4500/graphql'
  : process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4500/graphql';

console.log(`[GraphQLClient] isServer: ${isServer}, Using API URL: ${apiUrl}`);

const Client = new GraphQLClient(apiUrl, {
  headers: {},
});


export default Client;