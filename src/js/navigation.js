import { filmApiService } from './render-movies-grid';
import { filmLibrary }from './render-library';
import{ renderDefaultMovies, renderDefaultMoviesPopularOnWeek, onPaginationWithQuery} from './render-movies-grid'
import { onClickWatched, onClickQueue, onClickLibrary } from './render-library';
import{onClickPagination, onRenderPagination } from './pagination'


// const filmApiService = new FilmApiService();
// const filmLibrary = new FilmLibrary();


//сброс стилей к главной странице
const btnHome = document.querySelector('.nav-header__home');
const btnLogo = document.querySelector('.logo-header-home');
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
  toggleRenderPopular.classList.remove('active');
    
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
    
    filmLibrary.resetPageLib();
    onClickQueue();
}

function onRenderWatched() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
    renderContainer.innerHTML = '';
    
    filmLibrary.resetPageLib();
    onClickWatched();
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





// // прослушивание для кнопкок Хедера
// const btnHeaderEl = document.querySelector('.header-container');
// btnHeaderEl.addEventListener('click', onClickPagination);
// //прослушивание кнопки либрари

// //Смена хедера
// const headerHome = document.querySelector('.header-home');
// headerHome.addEventListener('click', onClickPagination)
// const headerMyLibrary = document.querySelector('.header-my-library ')
// headerMyLibrary.addEventListener('click', onClickPagination)

// const toggleRenderPopular = document.querySelector('.toggle-reander');
// toggleRenderPopular.addEventListener('click', onClickPagination)
// // Для тогла обновление фильмов


// //====================кнопки внутри библиотеки===========================

// const renderContainer = document.querySelector('.gallery-section > .container');
// // ==================================================
// renderWatchedEl.addEventListener('click', onClickPagination);


// //что может понадобиться
// // const btnHome = document.querySelector('.nav-header__home')


// //отвечает и за навигацию по приложению.
// function onClickHeader(event) {
  
//   const btnToggle = event.target.classList;
  
 

//  if (event.target === event.currentTarget) return;
//   const btnLibrary = event.target.classList.value;
//   if (btnLibrary.includes('nav-header__library') === true || btnLibrary.includes('render-library-js') === true) {
//     console.log('Вход в библиотеку')
//     onRenderMyLibrary();
//     onClickLibrary();
//   }
  
//   if (event.target === event.currentTarget) return;
//   const btnHomeLogo = event.target.classList.value;
//   if (btnHomeLogo.includes('nav-header__home') === true || btnHomeLogo.includes('logo-header__text') === true || btnHomeLogo.includes('logo-header__svg') === true) {
//     console.log('Вход на главную')
//     filmApiService.resetPage();
//     onReturnMainPage()
//     renderDefaultMovies();
//     onRenderPagination();
//   }
// // if (event.target === event.currentTarget) return;
//   const btnQueue = event.target.classList.value;
//   console.log(btnQueue)
//   if (btnQueue.includes('librari-nav__queue') === true) {
//     filmLibrary.resetPageLib()
//     onRenderQueue();
//     onClickQueue();
//   }
//   const btnWatched = event.target.classList.value;
//   if (btnWatched.includes('librari-nav__wach') === true) {
//     filmLibrary.resetPageLib()
//     onRenderWatched();
//     onClickWatched();
//   }
//   const btnToggleIsActiv = event.target.classList.value;
//   console.log(btnToggle)
//   if (btnToggleIsActiv .includes('off-itm') === true) {
//     onActivToggle()
//   } 

// }





// ========================================
