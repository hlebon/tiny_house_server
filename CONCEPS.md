A GraphQL Schema describes the GraphQL API

**Resolvers**: function turn graphql operation or request into data, are functiones that resolve and generate a response for a field

resolver always recieve:

1. obj: object returned from the parent resolver
2. args: arguments provider to the field
3. context: value provider to every resolver
4. info: info about the execution state of the query

**Object Type**: the most basic component of a GraphQL schema are the object types which represent the kind of object we can query and what properties that object has.

That are two special object types within a GraphQL schema called **Query** and **Mutation**.

The purpose of the Query type is to define all the possible entry points for fetching data (i.e. queries). The purpose of the Mutation type is to define all the possible entry points for manipulating data (i.e. mutations).

**Scalar types** represent basic data types that do not have any more nested properties.
