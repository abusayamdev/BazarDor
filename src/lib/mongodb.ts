import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();

if (!uri) {
  throw new Error("MONGODB_URI is not configured");
}

if (!/^mongodb(?:\+srv)?:\/\//i.test(uri)) {
  throw new Error(
    "MONGODB_URI must start with mongodb:// or mongodb+srv://",
  );
}

const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

const client = globalForMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export const mongoClient = client;

export const db = client.db(process.env.MONGODB_DB?.trim() || "bazardor");
