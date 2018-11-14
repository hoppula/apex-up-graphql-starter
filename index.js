const express = require("express");
const { ApolloServer } = require("apollo-server-express");
const { typeDefs } = require("./schema");
const { resolvers } = require("./resolvers");
const { PORT = 4000, NODE_ENV } = process.env;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  playground: {
    endpoint: NODE_ENV === "staging" ? "/staging/graphql" : "/graphql"
  }
});

var app = express();
server.applyMiddleware({
  app
});

app.listen({ port: PORT }, () => {
  console.log(
    `apollo-server-express GraphQL playground running at http://localhost:4000${
      server.graphqlPath
    }`
  );
});
