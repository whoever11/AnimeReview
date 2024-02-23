
let currentAnimeIndex = 0
let animeList = []

// Function to fetch and display all anime from the API
async function fetchAndDisplayAnime() {
    try {
        const response = await axios.get('http://localhost:3001/api/animes')
        animeList = response.data.animes 

        if (animeList.length > 0) {
            displayAnime(animeList[currentAnimeIndex]) // first anime
        }
    } catch (error) {
        console.error('Error fetching anime data:', error)
        document.getElementById('anime-container').textContent = 'Failed to load anime data.'
    }
}

// Function to display details of an anime
function displayAnime(anime) {
    const container = document.getElementById('anime-container')
    container.innerHTML = '' 

    const animeElement = document.createElement('div')
    animeElement.className = 'anime'
    
    const nameElement = document.createElement('h2')
    nameElement.textContent = anime.name
    animeElement.appendChild(nameElement)

    const imageElement = document.createElement('img')
    imageElement.src = anime.image
    imageElement.alt = `Cover image of ${anime.name}`
    imageElement.style.width = '300px'
    imageElement.style.height = '300px'
    animeElement.appendChild(imageElement)

    const descriptionElement = document.createElement('p')
    descriptionElement.textContent = anime.description
    animeElement.appendChild(descriptionElement)

    const detailsElement = document.createElement('p')
    const genresElement = document.createElement('p')
    genresElement.textContent = `Genres: ${anime.genres}`
    animeElement.appendChild(genresElement)

    const episodesElement = document.createElement('p')
    episodesElement.textContent = `Episodes: ${anime.episodes}`
    animeElement.appendChild(episodesElement)

    const charactersElement = document.createElement('p')
    charactersElement.textContent = `Characters: ${anime.characters}`
    animeElement.appendChild(charactersElement)

    const ratingElement = document.createElement('p')
    ratingElement.textContent = `Rating: ${anime.rating}`
    animeElement.appendChild(ratingElement)
    animeElement.appendChild(detailsElement)

    container.appendChild(animeElement)

    // Fetch and display reviews for the current anime
    fetchAndDisplayReviews(anime._id)
}

// Function to fetch and display reviews for a specific anime
async function fetchAndDisplayReviews(animeId) {
    try {
        const response = await axios.get(`http://localhost:3001/reviews/${animeId}`)
        const reviews = response.data.reviews

        const reviewsContainer = document.getElementById('reviews-container')
        reviewsContainer.innerHTML = '' 

        reviews.forEach(review => {
            const reviewElement = document.createElement('div')
            reviewElement.className = 'review'

            const titleElement = document.createElement('h3')
            titleElement.textContent = review.title
            reviewElement.appendChild(titleElement)

            const textElement = document.createElement('p')
            textElement.textContent = review.reviewText
            reviewElement.appendChild(textElement)

            const scoreElement = document.createElement('span')
            scoreElement.textContent = `Rating: ${review.score}`
            reviewElement.appendChild(scoreElement)

            const dateElement = document.createElement('p')
            dateElement.textContent = new Date(review.date).toLocaleDateString()
            reviewElement.appendChild(dateElement)

            reviewsContainer.appendChild(reviewElement)
        });
    } catch (error) {
        console.error('Error fetching reviews:', error)
        document.getElementById('reviews-container').textContent = 'Failed to load reviews.'
    }
}

// Function to submit a new review
async function submitReview(event) {
    event.preventDefault()

    const animeId = animeList[currentAnimeIndex]._id
    const reviewTitle = document.getElementById('review-title').value
    const reviewText = document.getElementById('review-text').value
    const reviewScore = document.getElementById('review-score').value

    try {
        await axios.post('http://localhost:3001/reviews', {
            animeId,
            title: reviewTitle,
            reviewText,
            score: reviewScore,
        });

        // Clear form
        document.getElementById('review-title').value = ''
        document.getElementById('review-text').value = ''
        document.getElementById('review-score').value = ''

        // Refresh reviews to include the new one
        fetchAndDisplayReviews(animeId)
    } catch (error) {
        console.error('Error submitting review:', error)
    }
}

// Function to show the next anime and its reviews
function showNextAnime() {
    if (currentAnimeIndex < animeList.length - 1) {
        currentAnimeIndex++
        displayAnime(animeList[currentAnimeIndex])
    } else {
        alert("You've reached the end of the anime list.")
    }
}


document.addEventListener('DOMContentLoaded', fetchAndDisplayAnime)
document.getElementById('review-form').addEventListener('submit', submitReview)
document.getElementById('next-anime').addEventListener('click', showNextAnime)


