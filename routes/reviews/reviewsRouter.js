// import express
const express = require("express")

// set up router
const router = express.Router()

// import controller functionality
const createReview = require("./reviewsController")

// handle POST requests to /api/v1/reviews
// anything that has to do with our database needs async/await
router.post("/", async (req, res) => {

    try {

        // call the controller createReview function
        const newReview = await createReview(req.body)

        // send success response to the user
        res.json ({
            message: "success",
            payload: newReview
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