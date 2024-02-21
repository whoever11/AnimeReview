const Review = require('../models/review')

const getReviews = async (req, res) => {
    try {
        const reviews = await Review.find()
        return res.status(200).json({ reviews })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReviewById = async (req, res) => {
    try {
        const review = await Review.findById(req.params.id)
        if (review) {
            return res.status(200).json({ review })
        } else {
            return res.status(404).send('Review with the specified ID does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReviewByTitle = async (req, res) => {
    try {
        const review = await Review.find({ title: req.params.title })
        if (review) {
            return res.status(200).json({ review })
        } else {
            return res.status(404).send('Review with the specified title does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getReviewByCriteria = async (req, res) => {
    try {
      const query = {}
  
      if (req.query.title) {
        query.title = req.query.title
      }
      if (req.query.reviewText) {
        query.reviewText = req.query.reviewText
      }
      if (req.query.score) {
        query.score = req.query.score
      }
      const reviews = await Review.find(query)
      if (reviews.length) {
        res.json(reviews)
      } else {
        res.status(404).send('No reviews match the specified criteria')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }

// Function to get reviews by animeId using route parameter
const getReviewsByAnimeId = async (req, res) => {
    try {
        const animeId = req.params.animeId // Get animeId from route parameters
        if (!animeId) {
            return res.status(400).json({ message: 'Anime ID is required' })
        }

        const reviews = await Review.find({ animeId: animeId })
        res.json({ reviews })
    } catch (error) {
        console.error('Failed to fetch reviews:', error)
        res.status(500).json({ message: 'Server error while fetching reviews' })
    }
}

  

const createReview = async (req, res) => {
    try {
        const review = await new Review(req.body)
        await review.save()
        return res.status(201).json({ review })
    } catch (error) {
        return res.status(500).json({ error: error.message })
    }
}

const updateReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndUpdate(req.params.id, { })
        if (review) {
            return res.status(200).json({ review })
        } else {
            return res.status(404).send('Review with the specified ID does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const deleteReview = async (req, res) => {
    try {
        const review = await Review.findByIdAndDelete(req.params.id)
        if (review) {
            return res.status(200).send('Review deleted')
        } else {
            return res.status(404).send('Review with the specified ID does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

module.exports = {
    getReviews,
    getReviewById,
    getReviewsByAnimeId,
    getReviewByTitle,
    getReviewByCriteria,
    createReview,
    updateReview,
    deleteReview
}
