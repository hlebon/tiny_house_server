// import dotenv from "dotenv";
// eslint-disable-next-line @typescript-eslint/no-var-requires
require("dotenv").config();
import express, { Application } from "express";
import { ApolloServer } from "apollo-server-express";
import { resolvers, typeDefs } from "./graphql";
import { connectDatabase } from "./db";

const port = 9000;

async function mount(app: Application) {
  const db = await connectDatabase();
  const server = new ApolloServer({
    resolvers,
    typeDefs,
    context: () => ({ db }),
  });
  server.applyMiddleware({ app, path: "/api" });

  app.listen(port, () => {
    console.log(`[app]: http://localhost:${port}`);
  });

  const listings = await db.listings.find({}).toArray();
  console.log({ listings });
}

mount(express());
