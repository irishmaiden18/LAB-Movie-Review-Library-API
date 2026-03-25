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

// export the controller function(s)
module.exports = createReview