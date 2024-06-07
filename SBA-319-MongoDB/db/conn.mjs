import dotenv from 'dotenv';
dotenv.config();

import { MongoClient } from 'mongodb';

const client = new MongoClient(process.env.ATLAS_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

client.connect()
  .then(() => {
    console.log('Connected to MongoDB Atlas');
  })
  .catch(err => {
    console.error('MongoDB connection error:', err);
  });

export default client;

















// import { MongoClient } from 'mongodb';
// // import dotenv from 'dotenv';
// // dotenv.config();

// // Variable for storing the connection string from our .env file
// const connectionString = process.env.ATLAS_URI || '';

// // Creating a new instance of the MongoClient
// const client = new MongoClient(connectionString);

// let conn;
// try {
//   // Connecting to your cluster
//   conn = await client.connect();
//   console.log('Successfully connected to Mongo!');
// } catch (e) {
//   console.log(e);
// }

// // choosing and storing the db we will be using from our cluster
// let db = conn.db("farOut");

// export default db;

//Connection file