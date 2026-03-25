// npm init -y

// npm i dotenv express mongoose morgan

// import express
const express = requre("express")

// set up the express app
const app = express()

// import morgan
const logger = require("morgan")

// set up middleware

// format our express body
app.use(express.json())

// set up morgan
app.use(logger("dev"))

// connect to MongoDB
const connectToMongoDB = require("./database/connectToMongoDB")

// import and use the movie router
const moviesRouter = require("./routes/movies/moviesRouter")
app.use("/api/v1/movies", moviesRouter)






// set up the port
const PORT = 3000

// start listening
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)

    // call the connectToMongoDB function
    connectToMongoDB()
})