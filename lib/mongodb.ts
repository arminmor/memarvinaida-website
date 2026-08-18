import { MongoClient } from 'mongodb';

if (!process.env.MONGODB_URI) {
  throw new Error('MONGODB_URI is not defined');
}
if (!process.env.MONGODB_DB_NAME) {
  throw new Error('MONGODB_DB_NAME is not defined');
}
if (!process.env.MONGODB_COLLECTION_NAME) {
  throw new Error('MONGODB_COLLECTION_NAME is not defined');
}

const uri = process.env.MONGODB_URI;
const dbName = process.env.MONGODB_DB_NAME;
export const collectionName = process.env.MONGODB_COLLECTION_NAME;
const client = new MongoClient(uri);

export async function connectDB() {
  try {
    await client.connect();
    const db = client.db(dbName);
    return db;
  } catch (error) {
    console.error('Failed to connect to MongoDB:', error);
    throw error;
  }
}

export async function closeDB() {
  await client.close();
}
