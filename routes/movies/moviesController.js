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

// export the controller function
module.exports = createMovie