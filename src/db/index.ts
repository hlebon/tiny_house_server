import { MongoClient } from "mongodb";
import { Database } from "../lib/types";

const user = process.env.DB_USER || ``;
const password = process.env.DB_PASSWORD || ``;
const cluster = process.env.DB_CLUSTER || ``;
const dbname = process.env.DB_NAME || ``;

const url = `mongodb+srv://${user}:${password}@${cluster}.hw9fw.mongodb.net/${dbname}?retryWrites=true&w=majority`;

export async function connectDatabase(): Promise<Database> {
  try {
    const client = await MongoClient.connect(url, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const db = client.db("main");
    return {
      listings: db.collection("test_listings"),
    };
  } catch (error) {
    console.log(`[DBERROR]: NOT CONNECTED TO DB ${error}`);
    throw new Error(error);
  }
}
