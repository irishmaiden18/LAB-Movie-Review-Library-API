// import mongoose
const mongoose = require("mongoose")

// create a movie schema
const movieSchema = new mongoose.Schema (
    {
        title: {
            type: String,
            required: true,
            unique: true
        },
        genre: {
            type: String,
            required: true
        },
        releaseYear: {
            type: Number,
            required: true
        }
    },
    {
        timestamps: true
    }
)

// create the movie model
const Movie = mongoose.model("Movie", movieSchema)

// export the movie model
module.exports = Movie