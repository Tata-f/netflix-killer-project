import getRefs from './get-refs';
import movieVideoTpl from '../templates/movie-video-card.hbs';
const refs = getRefs();
//=================================================================
//для получения id фильма 
refs.moviesContainer.addEventListener('click', fetchVideoMovieID);

//функция вызывает фетч с фильмом по id
async function fetchVideoMovieID(event) {
  
  let newMovie = '';
  
  try {
    if (event.target.className !== 'card-image-js') return;
    newMovie = event.target.dataset.id;
    console.log(newMovie)
    filmApiService.movie = newMovie;
  
    const movies = await filmApiService.fetchVideoMovie();
    const { results } = movies;
    // console.log(event.target.className)
    //await renderOpenedVideo(results)
    //открытие модалки
  }   catch (error) {
        
    }
}
fetchVideoMovieID()
//рендер
 function renderOpenedVideo(results) {
  const elements = movieVideoTpl(results);
//   refs.modal.innerHTML = elements; изменить на нужный контейнер
}