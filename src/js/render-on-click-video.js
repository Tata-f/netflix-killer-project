import movieVideoTpl from '../templates/movie-video-card.hbs';
import FilmApiService from './class-api-service';
import getRefs from './get-refs';

const refs = getRefs();
const filmApiService = new FilmApiService();
//для получения id фильма

refs.moviesContainer.addEventListener('click', fetchVideoMovieID);

// функция вызывает фетч с фильмом по id
async function fetchVideoMovieID(event) {
  
  let newMovie = '';
  
  try {
    if (event.target.className !== 'card-image-js') return;
    newMovie = event.target.dataset.id;
    // console.log(newMovie)
    filmApiService.movie = newMovie;
  
    const movies = await filmApiService.fetchVideoMovie();
    const { results } = movies;
    if (results.length === 0) return;
    const firstVideo = results[0];
    // renderOpenedVideo(firstVideo)
    // console.log(firstVideo)
    
    
  } catch (error) {
        
    }
}

fetchVideoMovieID()
//рендер
 function renderOpenedVideo(firstVideo) {
  const elements = movieVideoTpl(firstVideo);
//   refs.modal.innerHTML = elements; сменить место выгрузки видео
}