import { MongoClient } from 'mongodb';
import dotenv from 'dotenv';
dotenv.config();

// Storing connection from .env file
const client = new MongoClient(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

// Connecting to Cluster
// client.connect()
//   .then(() => {
//     console.log('Connected to MongoDB Atlas');
//   })
//   .catch(err => {
//     console.error('MongoDB connection error:', err);
//   });

// export default client;




let conn;
try {
  // Connecting to your cluster
  conn = await client.connect();
  console.log('Successfully connected to Mongo!');
} catch (e) {
  console.log(e);
}

// choosing and storing the db we will be using from our cluster
let db = conn.db("farOut");



//Connection file