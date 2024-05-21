// apollo-client.js

import { ApolloClient, InMemoryCache } from "@apollo/client";

let uri;
if (process.env.NODE_ENV === "production") {
  uri = "https://diet-detective.onrender.com/graphql";
} else {
  uri = "http://localhost:3001/graphql";
}
const client = new ApolloClient({
  uri: "https://diet-detective.onrender.com/graphql",
  cache: new InMemoryCache(),
});

export default client;
