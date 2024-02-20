const animePage = document.getElementById('anime-page')
const reviewPage = document.getElementById('review-page')
const animeBtn = document.getElementById('anime-btn')
const reviewBtn = document.getElementById('review-btn')

animeBtn.addEventListener('click', () => {
    animePage.style.display = 'block'
    reviewPage.style.display = 'none'
    }
)

reviewBtn.addEventListener('click', () => {
    animePage.style.display = 'none'
    reviewPage.style.display = 'block'
    }
)