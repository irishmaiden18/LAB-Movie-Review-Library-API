// import express
const express = require("express")

// set up router
const router = express.Router()

const Movie = require("./moviesModel")

// import movie controller functionality
const {createMovie, getMovies, getMovieAndReviewsById} = require("./moviesController")

// handle GET requests to /api/v1/movies
// anything that has to do with our database needs async/await
router.get("/", async (req, res) => {

    try {

        // call the controller function
        const movies = await getMovies(req.query.genre)

        // send a success response to the user
        res.json ({
            message: "success",
            payload: movies 
        })

        
    } catch (error) {
        
        // send a failure response to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
    }

})

// handle GET requests based on ID to /api/v1/movies
// anything that has to do with our database needs async/await
router.get("/:movieId", async (req, res) => {

    try {

        // call the getMovieAndReviewsById function
        const foundMovie = await getMovieAndReviewsById(req.params.movieId)

        // send a response to the user with the foundMovie
        res.json ({
            message: "success",
            payload: foundMovie
        })
        
    } catch (error) {
        
        // send a failure response to the user
        res.status(500).json ({
            message: "failure",
            payload: error.message
        })
    }
})

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
