import { MongoClient, Db } from "mongodb";

const uri = process.env.MONGODB_URI?.trim();

if (!uri) {
  throw new Error("MONGODB_URI is missing. Check environment variables.");
}

if (!uri.startsWith("mongodb://") && !uri.startsWith("mongodb+srv://")) {
  throw new Error(
    "Invalid MONGODB_URI. It must start with mongodb:// or mongodb+srv://. Check the Vercel environment variable value.",
  );
}

const globalForMongo = globalThis as typeof globalThis & {
  mongoClient?: MongoClient;
};

const client = globalForMongo.mongoClient ?? new MongoClient(uri);

if (process.env.NODE_ENV !== "production") {
  globalForMongo.mongoClient = client;
}

export const mongoClient: MongoClient = client;

export const db: Db = client.db(process.env.MONGODB_DB || "bazardor");
