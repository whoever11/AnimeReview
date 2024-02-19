const db = require('../db')
const Review = require('../models/review')

db.on('error', console.error.bind(console, 'MongoDB connection error:'))

const main = async () => {
    const reviews = [
        { 
            title: 'Best Anime Ever',
            animeId: '65d38082785a2f299aaac184',
            reviewText: 'This is the best anime I have ever seen. I love the characters and the story is amazing. I would recommend this to anyone who loves anime.',
            score: 10,
            date: '2023-07-23'
        },
            {
                title: "A True Masterpiece",
                animeId: "65d38082785a2f299aaac184",
                reviewText: "A masterpiece that transcends typical anime tropes. The depth of storytelling and character development is unparalleled. It's a series that resonates emotionally and stays with you long after you've finished watching.",
                score: 9,
                date: "2023-06-24"
              },
              {
                title: "Epic and Unforgettable",
                animeId: "65d38082785a2f299aaac184",
                reviewText: "Epic in every sense, this anime combines thrilling action, deep emotional moments, and unforgettable characters into one incredible journey. It's not just anime; it's a life experience. Definitely a must-watch for any anime fan out there.",
                score: 9.4,
                date: "2024-01-25"
              },
              
        {
              title: "Innovative and Engaging",
              animeId: "65d38082785a2f299aaac185",
              reviewText: "The innovative storytelling and world-building set a new benchmark. Absolutely engaging from start to finish.",
              score: 9,
              date: "2023-07-26"
            },
            {
              title: "Animation Perfection",
              animeId: "65d38082785a2f299aaac185",
              reviewText: "The animation quality is top-notch, with breathtaking scenes that showcase the creators' dedication. A visual feast!",
              score: 9.3,
              date: "2023-07-27"
            },
            {
              title: "Character Depth Like No Other",
              animeId: "65d38082785a2f299aaac185",
              reviewText: "Every character is meticulously crafted with depth and backstory, making you invest emotionally in their journey.",
              score: 10,
              date: "2023-07-28"
              },
    {
                title: "Unpredictable Plot Twists",
                animeId: "65d38082785a2f299aaac186",
                reviewText: "Just when you think you have it figured out, the plot twists leave you in awe. Brilliantly unpredictable!",
                score: 9.5,
                date: "2023-07-29"
              },
              {
                title: "Soundtrack that Resonates",
                animeId: "65d38082785a2f299aaac186",
                reviewText: "The soundtrack perfectly complements the emotional tone of the anime, enhancing every scene.",
                score: 9,
                date: "2023-07-30"
              },
              {
                title: "A Rollercoaster of Emotions",
                animeId: "65d38082785a2f299aaac186",
                reviewText: "This anime takes you on an emotional rollercoaster, from laughter to tears, in the best way possible.",
                score: 10,
                date: "2023-07-31"
              }, 

     {
                title: "Cultural Impact",
                animeId: "65d38082785a2f299aaac188",
                reviewText: "Beyond entertainment, this anime has made a significant cultural impact, resonating with audiences worldwide.",
                score: 9,
                date: "2023-08-01"
              },
              {
                title: "Redefining the Genre",
                animeId: "65d38082785a2f299aaac188",
                reviewText: "It redefines its genre, breaking traditional boundaries and presenting something fresh and innovative.",
                score: 8,
                date: "2023-08-02"
              },
              {
                title: "Compelling Villains",
                animeId: "65d38082785a2f299aaac188",
                reviewText: "The villains are as compelling as the protagonists, with motives that blur the line between right and wrong.",
                score: 10,
                date: "2023-07-03"
              },

        {
                title: "Aesthetic and Artistic",
                animeId: "65d38082785a2f299aaac187",
                reviewText: "The artistic direction and aesthetic appeal are unmatched, making every frame worthy of appreciation.",
                score: 9,
                date: "2023-08-04"
              },
              {
                title: "Pacing and Development",
                animeId: "65d38082785a2f299aaac187",
                reviewText: "The pacing is perfect, ensuring character and plot development are balanced and engaging throughout.",
                score: 8,
                date: "2023-07-05"
              },
              {
                title: "Philosophical Depth",
                animeId: "65d38082785a2f299aaac187",
                reviewText: "It delves into philosophical questions, challenging viewers to think deeply about the themes presented.",
                score: 9,
                date: "2023-08-06"
              },      
        {
                title: "Humor and Wit",
                animeId: "65d38082785a2f299aaac18a",
                reviewText: "The humor is clever and witty, providing a perfect balance to the more serious elements of the story.",
                score: 9,
                date: "2023-03-07"
              },
              {
                title: "Masterful Directing",
                animeId: "65d38082785a2f299aaac18a",
                reviewText: "The directing is masterful, with each scene crafted to convey the maximum emotional and narrative impact.",
                score: 9.5,
                date: "2023-08-08"
              },
              {
                title: "Iconic Scenes",
                animeId: "65d38082785a2f299aaac18a",
                reviewText: "Contains some of the most iconic scenes in anime history, unforgettable and often referenced.",
                score: 10,
                date: "2023-04-09"
              },
        {
                title: "Fandom and Community",
                animeId: "65d38082785a2f299aaac189",
                reviewText: "The fandom is welcoming and passionate, creating a community that enhances the experience of the anime.",
                score: 9,
                date: "2023-08-10"
              },
              {
                title: "Voice Acting Excellence",
                animeId: "65d38082785a2f299aaac189",
                reviewText: "The voice acting is exceptional, bringing characters to life with authenticity and emotional depth.",
                score: 10,
                date: "2023-08-11"
              },
              {
                title: "Impactful Ending",
                animeId: "65d38082785a2f299aaac189",
                reviewText: "The ending is impactful, providing a satisfying conclusion that stays true to the themes of the anime.",
                score: 9,
                date: "2023-08-12"
              },

              {
                title: "Expansive Universe",
                animeId: "65d38082785a2f299aaac18c",
                reviewText: "The universe is expansive and detailed, inviting exploration beyond the main storyline.",
                score: 8,
                date: "2023-09-13"
              },
              {
                title: "Strong Female Characters",
                animeId: "65d38082785a2f299aaac18c",
                reviewText: "Features strong and complex female characters, each with their own story and development.",
                score: 10,
                date: "2023-08-14"
              },
              {
                title: "Cinematography and Visuals",
                animeId: "65d38082785a2f299aaac18c",
                reviewText: "The cinematography and visuals are stunning, using innovative techniques to enhance the storytelling.",
                score: 9,
                date: "2023-08-15"
              },

              {
                title: "Engaging Side Plots",
                animeId: "65d38082785a2f299aaac18b",
                reviewText: "The side plots are engaging and well-integrated, enriching the main narrative without detracting from it.",
                score: 8.5,
                date: "2023-08-16"
              },
              {
                title: "Cultural Significance",
                animeId: "65d38082785a2f299aaac18b",
                reviewText: "This anime holds significant cultural importance, influencing not just other media but societal views as well.",
                score: 10,
                date: "2023-010-17"
              },
              {
                title: "Breaks New Ground",
                animeId: "65d38082785a2f299aaac18b",
                reviewText: "Breaks new ground within its genre, challenging conventions and introducing innovative concepts.",
                score: 9,
                date: "2023-08-18"
              }
    ]
    try {
        await Review.insertMany(reviews)
        console.log('Created reviews!')
    } catch (error) {
        console.error(error)
    }
}

const run = async () => {
    await main()
    db.close()
}
run()