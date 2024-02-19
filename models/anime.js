const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Anime = new Schema(
    {
        name: { type: String, required: true },
        description: { type: String, required: true },
        genres: { type: String, required: true },
        episodes: { type: Number, required: true },
        characters: { type: String, required: true },
        aired: { from: { type: Date, required: true }, to: { type: Date, required: true } },
        image: { type: String, required: true },
        rating: { type: Number, required: true },
    },
    { timestamps: true },
)

module.exports = mongoose.model('animes', Anime)