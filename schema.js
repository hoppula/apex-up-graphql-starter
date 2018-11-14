const { gql } = require("apollo-server");

// The GraphQL schema
exports.typeDefs = gql`
  type Query {
    "A simple type for getting started!"
    hello: String
  }
`;
