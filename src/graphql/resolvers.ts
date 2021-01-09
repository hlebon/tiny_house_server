import { IResolvers } from "apollo-server-express";
import { listings, Listing } from "../listing";

export const resolvers: IResolvers = {
  Query: {
    listings: (): Listing[] => {
      return listings;
    },
  },
  Mutation: {
    deleteListing: (_root: undefined, { id }: { id: string }) => {
      for (const index in listings) {
        if (listings[Number(index)].id === id) {
          return listings.splice(Number(index), 1)[0];
        }
      }
    },
  },
};
