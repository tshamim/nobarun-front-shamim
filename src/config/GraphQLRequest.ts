import { GraphQLClient } from 'graphql-request';

const apiUrl = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4500/graphql';
console.log('[GraphQLClient] Using API URL:', apiUrl);

const Client = new GraphQLClient(apiUrl, {
  headers: {},
});


export default Client;