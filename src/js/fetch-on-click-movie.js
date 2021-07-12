import getRefs from "./get-refs";
import movieModalCard from '../templates/movie-modal-card.hbs';

const refs = getRefs();
const modal = document.querySelector('.modal')

const options = {
  BASE_URL: 'https://api.themoviedb.org/3/',
  API_KEY: 'bb99cf0123948bcb57616045b789da85',
};

refs.moviesContainer.addEventListener('click', getMovieById)

async function getMovieById(e) {  
    try {
        if (e.target.className !== 'card-image-js') return
        modal.innerHTML = '';
        const filmId = e.target.dataset.id;
        const response = await fetch(`${options.BASE_URL}movie/${filmId}?api_key=${options.API_KEY}`);
        const result = await response.json();
        const render = await renderOpenedMovie(result);
        
        window.addEventListener('keydown', onEscKeyDown);
        document.body.classList.add('show-modal');
        document.body.classList.add('scroll-hidden');
    }   catch {
        console.log('Oops!');
    }
}

async function renderOpenedMovie(res) {
   const result = await modal.insertAdjacentHTML('beforeend', movieModalCard(res))
}

function onEscKeyDown(e) {
  if (e.code === 'Escape') {
    document.body.classList.remove('show-modal');
  }
}