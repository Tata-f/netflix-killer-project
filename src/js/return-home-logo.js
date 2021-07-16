// import renderDefaultMovies from './render-movies-grid';
// import { onRenderPagination } from './pagination';
// import { filmApiService } from './render-movies-grid';

// const refs = {
//   logoHeader: document.querySelector('.logo-header-library'),
//   btnNavHome: document.querySelector('.nav-header-library .nav-header__home'),
//   headerHome: document.querySelector('.header-home'),
//   headerLibrary: document.querySelector('.header-my-library'),
//   toggleRenderPopular: document.querySelector('.toggle-reander'),
// };

// refs.logoHeader.addEventListener('click', onReturnMainPage);
// refs.btnNavHome.addEventListener('click', onReturnMainPage);

// function onReturnMainPage() {
//   refs.headerLibrary.classList.add('not-active');
//   refs.headerHome.classList.remove('not-active');

//   refs.toggleRenderPopular.classList.remove('active');

//   console.log(refs.toggleRenderPopular);

//   filmApiService.resetPage();
//   renderDefaultMovies();
//   onRenderPagination();
// }
