// import the Movie model
const Movie = require("./moviesModel")

// import review controller functionality
const {getReviewsByMovieId} = require("../reviews/reviewsController")

// write a function that will take in movie data and create a new movie entry based on that data
// everything that has to do with out database requires async/await
const createMovie = async (movieData) => {

    try {

        // create the new movie the same way we would normally except inside the controller file
        const newMovie = await Movie.create(movieData)

        // return the new movie
        return newMovie
        
    } catch (error) {
        
        // propogates the error to the router file
        throw error
    }
}

// write a function that will get a list of all the movies in the database
const getAllMovies = async () => {

    try {

        // get a list of all movies in the database
        const allMovies = await Movie.find()

        // return the movies
        return allMovies

        
    } catch (error) {
        
        // propogates the error to the router file
        throw error 
    }
}

// write a function that will get a list of all the movies in the database of a particular genre
const getGenreMovies = async (genre) => {

    try {

        // get a list of all movies of a particular genre
        const filteredMovies = Movie.find({genre: `${genre}`})

        // return the filtered movies
        return filteredMovies

    } catch (error) {

        // propogates the error to the router file
        throw error
        
    }
}

// write a funtion that will get a movie from it's id ad return the movie object as well as the associated reviews
const getMovieById = async (movieId) => {

    try {

        // find a movie based on movieId
        const foundMovie = Movie.findOne({_id: movieId})

        // return the found movie
        return foundMovie
        
    } catch (error) {
        
        //propogates the error to the router file
        throw error

    }

}

// write a function that will get a movie and associated reviews by id and combine them into a single returnable object
const getMovieAndReviewsById = async (movieId) => {

    try {

        // get the movie by id
        let foundMovie = await getMovieById(movieId)

        // get the reviews for the above movie using the id
        const foundReviews = await getReviewsByMovieId(movieId)

        // change foundMovie to a regular object
        updatedMovie = foundMovie.toObject()

        // add the reviews property to the updatedMovie object
        updatedMovie.reviews = foundReviews

        // return the updated movie
        return updatedMovie
        
    } catch (error) {
        
        //propogates the error to the router file
        throw error
    }


}

// export the controller function
module.exports = {createMovie, getAllMovies, getGenreMovies, getMovieById, getMovieAndReviewsById}