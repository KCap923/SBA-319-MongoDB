import express from 'express';
import './db/conn.mjs'; 
import dotenv from 'dotenv';
dotenv.config();
// Import data from routes folder
import astronauts from './routes/astronauts.mjs'

const PORT = process.env.PORT || 3190;
const app = express();

// JSON middleware
app.use(express.json());

//Astronaut Routes
app.use('/api/astronauts', astronauts)


// Route
app.get('/', (req, res) => {
  console.log('Received request on /');
  res.send('Welcome to Lift Off!!!');
});

// Global Error Handling Middleware
app.use((err, req, res, next) => {
  console.error('Error occurred:', err);
  res.status(500).send('Houston we have a problem...');
});


// Start Express Server
app.listen(PORT, () => {
  console.log(`Server running on port: ${PORT}`);
});

console.log('Server setup completed');


















// // Requiring and configuring the .env file to access its variables
// require('dotenv').config();
// // Requiring express
// const express = require('express');
// // Creating the express server and storing inside the app variable
// const app = express();
// // Port in which the server will run on
// const PORT = process.env.PORT || 3190;
// // Requiring example router
// const userRouter = require('./routes/users.js');

// // Configuring the server to accept and parse JSON data.
// app.use(express.json());

// //Custom Middlware
// app.use((req, res, next) => {
//   console.log(`A ${req.method} request was made to ${req.url}`);
//   next();
// });

// // Connecting the router to the server
// app.use('/users', userRouter);

// // Error Handling Middlware
// app.use((err, req, res, next) => {
//   res.status(500).send('Something went wrong.');
// });

// // Calling the listen function telling the server to listen on port 3000
// app.listen(PORT, () => {
//   console.log(`Listening on port: ${PORT}`);
// });
