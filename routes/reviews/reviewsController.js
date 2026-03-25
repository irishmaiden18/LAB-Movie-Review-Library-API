// import the Review model
const Review = require("./reviewsModel")

// write a function that will take in review data and create a new data entry based on that data
// everything that has to do with our database requires async/await
const createReview = async (reviewData) => {

    try {

        // create the new review the same way we would do normally except inside our controller file
        const newReview = await Review.create(reviewData)

        // return the new review
        return newReview
        
    } catch (error) {
        
        // propogates the error to the router file
        throw Error("Error creating review")
    }
}

// write a function that will get a list of all the reviews in the database
const getAllReviews = async () => {

    try {

        // get a list of all reviews in the database
        const allReviews = await Review.find()

        // return the reviews
        return allReviews

        
    } catch (error) {
        
        // propogates the error to the router file
        throw error 
    }
}

// export the controller function(s)
module.exports = {createReview, getAllReviews}