const express = require('express')
const db = require('./db')
const cors = require('cors')
const animeController = require('./controllers/animeController')
const reviewController = require('./controllers/reviewController')

const PORT = process.env.PORT || 3001

const app = express()
const logger = require('morgan')
app.use(logger('dev'))
const bodyParser = require('body-parser')
app.use(bodyParser.json())
app.use(cors())
app.use(express.json())

app.listen(PORT, () => console.log(`Listening on port: ${PORT}`))


app.get('/', (req, res) => res.send('This is our landing page!'))
app.get('/api/animes', animeController.getAnimes)
app.get('/animes/:id', animeController.getAnimeById)
app.get('/animes/:id/:name', animeController.getAnimeByName)
app.get('/animes/:criteria', animeController.getAnimeByCriteria)
app.get(`/api/animes/:animeId/reviews`, animeController.getAnimeReviews)
app.post('/animes', animeController.createAnime)
app.put('/animes/:id', animeController.updateAnime)
app.delete('/animes/:id', animeController.deleteAnime)
//reviews
app.get('/reviews', reviewController.getReviews)
app.get('/reviews/:animeId', reviewController.getReviewsByAnimeId)
app.get('/reviews/:id', reviewController.getReviewById)
app.get('/reviews/:title', reviewController.getReviewByTitle)
app.get('/reviews/:criteria', reviewController.getReviewByCriteria)
app.post('/reviews', reviewController.createReview)
app.put('/reviews/:id', reviewController.updateReview)
app.delete('/reviews/:id', reviewController.deleteReview)
