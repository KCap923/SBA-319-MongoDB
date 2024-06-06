import express from 'express'
import dotenv from 'dotenv'
dotenv.config()

const PORT = process.env.PORT || 3190
const app = express()

//Connect to DB
import "./db/conn.mjs"

//JSON middleware
app.use(express.json())

app.get("/", (req, res) => {
  res.send("Welcome to Lift Off!!!")
})

//Global Error Handling Middleware
app.use((err, req, res, next) => {
  res.status(500).send("Houston we have a problem...")
})

// Start Express Server
app.listen(PORT, () => {
console.log(`Server running on port: ${PORT}`)

})