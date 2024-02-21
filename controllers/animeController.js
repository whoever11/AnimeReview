const Anime = require('../models/anime')

const getAnimes = async (req, res) => {
    try {
        const animes = await Anime.find()
        return res.status(200).json({ animes })
    } catch (error) {
        return res.status(500).send(error.message)
    }
}

const getAnimeById = async (req, res) => {
     try {
      const anime = await Anime.findById(req.params.id)
      if (anime) {
        return res.status(200).json({ anime })
      }
      else {
        return res.status(404).send('Anime with the specified ID does not exist')
      }
     } catch (error) {
      return res.status(500).send(error.message)
     }
}
const getAnimeByName = async (req, res) => {
    try {
        const anime = await Anime.find({ name: req.params.name })
        if (anime) {
            return res.status(200).json({ anime })
        }
        else {
            return res.status(404).send('Anime with the specified name does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
const getAnimeByCriteria = async (req, res) => {
  try {
    const query = {}

    if (req.query.name) {
      query.name = req.query.name
    }
    if (req.query.description) {
      query.description = req.query.description
    }
    if (req.query.genres) {
      query.genres = req.query.genres
    }
    if (req.query.episodes) {
      query.episodes = req.query.episodes
    }
    if (req.query.characters) {
      query.characters = req.query.characters
    }
    if (req.query.aired) {
      query.aired = req.query.aired
    }
    if (req.query.image) {
      query.image = req.query.image
    }
    if (req.query.rating) {
      query.rating = req.query.rating
    }
    const animes = await Anime.find(query)
    if (animes.length) {
      res.json(animes)
    } else {
      res.status(404).send('No animes match the specified criteria')
    }
  } catch (error) {
    return res.status(500).send(error.message)
  }
}
const getAnimeReviews = async (req, res) => {
  const animeId = req.params.animeId
  try {
    const anime = await Anime.findById(animeId)
    const reviews = anime.reviews
    res.json(reviews)
  }
  catch (error) {
    return res.status(500).send(error.message)
  }
}

  const createAnime = async (req, res) => {
    try {
      const anime = await new Anime(req.body)
      await anime.save()
      return res.status(201).json({ anime })
    } catch (error) {
      return res.status(500).json({ error: error.message })
    }
  }

  const updateAnime = async (req, res) => {
    try {
      const Anime = await Anime.findByIdAndUpdate(req.params.id, {  })
      if (Anime) {
        return res.status(200).json({ Anime })
      } else {
        return res.status(404).send('Anime with the specified ID does not exist')
      }
    } catch (error) {
      return res.status(500).send(error.message)
    }
  }
const deleteAnime = async (req, res) => {
    try {
        const anime = await Anime.findByIdAndDelete(req.params.id)
        if (anime) {
            return res.status(200).send('Anime deleted')
        } else {
            return res.status(404).send('Anime with the specified ID does not exist')
        }
    } catch (error) {
        return res.status(500).send(error.message)
    }
}
module.exports = {
    getAnimes,
    getAnimeById,
    getAnimeByName,
    getAnimeByCriteria,
    getAnimeReviews,
    createAnime,
    updateAnime,
    deleteAnime
}