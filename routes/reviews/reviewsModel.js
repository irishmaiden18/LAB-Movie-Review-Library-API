// import mongoose
const mongoose = require("mongoose")

// define an ObjectId variable to give us access to mongoDB's unique generated ID type
const ObjectId = mongoose.Schema.Types.ObjectId

// create a review schema
const reviewSchema = new mongoose.Schema (
    {
        reviewText: {
            type: String,
            required: true
        },
        rating: {
            type: Number,
            required: true,
            min: 1,
            max: 5
        },
        movie: {
            // to refer to another data type that we've created in our MongoDB database, utilize both the ObjectId type and a reference (ref) to the specific model we want
            type: ObjectId, 
            ref: "Movie",
            required: true
        }
    },
    {
        timestamps: true,
    }
)

// create a review model
const Review = mongoose.model("Review", reviewSchema)

// export the review model
module.exports = Review