import { GraphQLSchema, GraphQLString, GraphQLObjectType } from "graphql";

const query = new GraphQLObjectType({
  name: "Query",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello with the query",
    },
  },
});
const mutation = new GraphQLObjectType({
  name: "Mutation",
  fields: {
    hello: {
      type: GraphQLString,
      resolve: () => "Hello with the mutation",
    },
  },
});

export const schema = new GraphQLSchema({ query, mutation });