import getRefs from './get-refs';
import movieModalCard from '../templates/movie-modal-card.hbs';
import onOpenModal from './modal-open';
import addToWatchedLockalS from './ls-add-to-watched';
import addToQueueLockalS from './ls-add-to-queue';
import FilmApiService from './class-api-service';
import { loader, loaderStyles } from './spinner';

const refs = getRefs();

const filmApiService = new FilmApiService();

refs.moviesContainer.addEventListener('click', getMovieById);

async function getMovieById(e) {
  if (e.target.className === 'card-image-js') {
    loader.showLoading(loaderStyles)
  };
  
  console.log(e)
  try {
    if (e.target.className !== 'card-image-js') return;
    refs.modal.innerHTML = '';

    filmApiService.query = e.target.dataset.id;
    const result = await filmApiService.fetchOnClickMovie();
    await renderOpenedMovie(result);
    
    onOpenModal();
    await addToWatchedLockalS(result);
    await addToQueueLockalS(result);
  } catch {
    console.log('Oops!');
  }
  loader.hideLoading();
}

async function renderOpenedMovie(res) {
  const result = await refs.modal.insertAdjacentHTML('beforeend', movieModalCard(res));
}
