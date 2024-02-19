const mongoose = require('mongoose')
const  { Schema } = require('mongoose')

const Review = new Schema(
    {
        title: { type: String, required: true },
        animeId: { type: mongoose.Schema.Types.ObjectId, ref: 'Anime', required: true },
        reviewText: { type: String, required: true },
        score: { type: Number, required: true, min : 0, max : 10},
        date: {type : Date, default: Date.now}
    },
    { timestamps: true },
)

module.exports = mongoose.model('reviews', Review)