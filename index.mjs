import express from 'express'
import dotenv from 'dotenv'
// Use our .env to get into database
dotenv.config()
import astronauts from './routes/astronauts.mjs'

const PORT = process.env.PORT || 3190;
const app = express();

//Connect to DB
// import "./db/conn.mjs"

//JSON middleware
app.use(express.json());

app.use('/api/astronauts', astronauts);

app.get("/", (req, res) => {
  res.send('<h1>Welcome to Lift Off!!!</h1>');
});

//Global Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).send("Houston we have a problem...");
});

// Start Express Server
app.listen(PORT, () => {
console.log(`Server running on port: ${PORT}`);
});