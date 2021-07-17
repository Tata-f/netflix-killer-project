import { filmApiService } from './render-movies-grid';
import { filmLibrary }from './render-library';
import{ renderDefaultMovies, renderDefaultMoviesPopularOnWeek, onPaginationWithQuery} from './render-movies-grid'
import {  onClickQueue, onClickLibrary } from './render-library';
import{onClickPagination, onRenderPagination } from './pagination'

//сброс стилей к главной странице
const btnHome = document.querySelector('.nav-header__home');
const btnLogo = document.querySelector('.logo-header-home');
const inputTogglePopular = document.querySelector('#toggle-input');
btnHome.addEventListener('click', onReturnMainPage);
btnLogo.addEventListener('click', onReturnMainPage);
const headerMyLibrary = document.querySelector('.header-my-library ')
const headerHome = document.querySelector('.header-home');
const toggleRenderPopular = document.querySelector('.toggle-reander');
//сброс стилей к главной странице

function onReturnMainPage() {
  headerMyLibrary.classList.add('not-active');
  headerHome.classList.remove('not-active');
  btnHome.classList.add('active')
  btnLibrary.classList.remove('active')
  toggleRenderPopular.classList.remove('active');
  inputTogglePopular.checked = true;
    
    filmApiService.resetPage();
    filmApiService.query = '';
    renderDefaultMovies();
    
}
// =================================================
//прослушивание кнопки либрари смена классов при клике
const btnLibrary = document.querySelector('.nav-header__library');
btnLibrary.addEventListener('click', onRenderMyLibrary);
const renderWatchedEl = document.querySelector('.render-watched-js');
const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');
//прослушивание кнопки либрари смена классов при клике
function onRenderMyLibrary() {
  btnHome.classList.remove('active')
  headerHome.classList.add('not-active')
  btnLibrary.classList.add('active')
  headerHome.classList.remove('active')
  headerMyLibrary.classList.remove('not-active')	
  toggleRenderPopular.classList.add('active')
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
  renderContainer.innerHTML = '';
    
    filmApiService.resetPage();
    filmLibrary.resetPageLib();
    filmApiService.query = '';
    onClickLibrary();
    
}
// =================================================

// Меняет стили при нажатии на кнопку кюе и вотч в библиотеке

renderWatchedEl.addEventListener('click', onRenderWatched);
renderQueueEl.addEventListener('click', onRenderQueue);

function onRenderQueue() {
  renderWatchedEl.classList.remove('active');
  renderQueueEl.classList.add('active');
    renderContainer.innerHTML = '';
    filmApiService.resetPage();
    filmLibrary.resetPageLib();
    onClickQueue();
}

function onRenderWatched() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
    renderContainer.innerHTML = '';
    filmApiService.resetPage();
    filmLibrary.resetPageLib();
    onClickLibrary();
}
// ====================================================

//добавляет тоглу активное и не активное состояние
const togglPopular = document.querySelector('.off-itm')
togglPopular.addEventListener('click', onActivToggle)
togglPopular.addEventListener('click', onOffToggle)

function onActivToggle() {
    togglPopular.classList.add('active-toggle');
    
    filmApiService.resetPage();
    filmApiService.query = '';
    renderDefaultMoviesPopularOnWeek();
    onRenderPagination();
}

function onOffToggle() {
    togglPopular.classList.remove('active-toggle');
    
    filmApiService.resetPage();
    filmApiService.query = '';
    renderDefaultMovies();
    onRenderPagination();
}
