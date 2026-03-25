// import the Movie model
const Movie = require("./moviesModel")

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

// export the controller function
module.exports = {createMovie, getAllMovies, getGenreMovies}