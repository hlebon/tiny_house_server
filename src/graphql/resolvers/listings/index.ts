import { IResolvers } from "apollo-server-express";
import { ObjectId } from "mongodb";
import { Database, Listing } from "../../../lib/types";

export const listingResolvers: IResolvers = {
  Query: {
    listings: async (
      _root: undefined,
      _args: unknown,
      ctx: { db: Database }
    ): Promise<Listing[]> => {
      return await ctx.db.listings.find({}).toArray();
    },
  },
  Mutation: {
    deleteListing: async (
      _root: undefined,
      { id }: { id: string },
      { db }: { db: Database }
    ): Promise<Listing> => {
      const result = await db.listings.findOneAndDelete({
        _id: new ObjectId(id),
      });
      if (!result.value) {
        throw new Error("failed to delete");
      }
      return result.value;
    },
  },
  Listing: {
    id: (listing: Listing): string => {
      return listing._id.toString();
    },
  },
};
