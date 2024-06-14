// This mjs extension lets Node know we are working w/a module file that is entended to be imported
import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config()

// Storing connection from .env file
const client = new MongoClient(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

let conn;
try {
  // Connecting to my cluster
  conn = await client.connect();
  console.log('Successfully connected to Mongo!');
} catch (e) {
  console.log(e);
}

// Storing the db that i'm using from my cluster
let db = conn.db('farOut');

export default client;

//Connection file



