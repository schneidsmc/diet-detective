// apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

const client = new ApolloClient({
  uri: "https://your-graphql-api-url", // Your GraphQL API endpoint
  cache: new InMemoryCache(),
});

export default client;
