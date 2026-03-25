// import express
const express = require("express")

// set up router
const router = express.Router()

// import controller functionality
const createMovie = require("./moviesController")

// handle POST requests to /api/v1/movies
// anything that has to do with our database needs async/await
router.post("/", async (req, res) => {

    try {

        // call the controller function, the req.body is the movieData
        const newMovie = await createMovie(req.body)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: newMovie
        })
        
    } catch (error) {
        
        // send a failure response to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
    }
})

// export the router
module.exports = router
