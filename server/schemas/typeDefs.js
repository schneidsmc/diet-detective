// const { gql } = require('@apollo/server')

const typeDefs = `
type Query {
    user: [User]
}

type User {
    _id: ID
    username: String
    email: String
    password: String
    height: Float
    weight: Float
    age: Int
    sex: String
    foods: [Food]
  }

  type Food {
    _id: ID
    name: String
  }
`;

module.exports = typeDefs;
