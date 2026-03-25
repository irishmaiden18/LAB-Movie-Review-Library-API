// npm init -y

// npm i dotenv express mongoose morgan

// import express
const express = require("express")

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

// import and use the review router
const reviewsRouter = require("./routes/reviews/reviewsRouter")
app.use("/api/v1/reviews", reviewsRouter)





// set up the port
const PORT = 3000

// start listening
app.listen(PORT, () => {
    console.log(`Server is listening on Port: ${PORT}`)

    // call the connectToMongoDB function
    connectToMongoDB()
})