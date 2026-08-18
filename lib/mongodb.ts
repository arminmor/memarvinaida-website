import { MongoClient } from 'mongodb';

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;
const collName = process.env.MONGODB_COLLECTION_NAME;

if (!uri) {
  throw new Error('MONGODB_URI environment variable is not set');
}
if (!dbName) {
  throw new Error('MONGODB_DB_NAME environment variable is not set');
}
if (!collName) {
  throw new Error('MONGODB_COLLECTION_NAME environment variable is not set');
}

export const collectionName = collName;
const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (error) {
    const message = error instanceof Error ? error.message : String(error);
    console.error('Failed to connect to MongoDB:', message);
    throw new Error(`MongoDB connection failed: ${message}`);
  }
}

export async function closeDB() {
  await client.close();
}
