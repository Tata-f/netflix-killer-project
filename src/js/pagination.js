const paginationEl = document.querySelector('.pagination-list');
const btnHeaderEl = document.querySelector('.header-container');
const headerHome = document.querySelector('.header-home');
const headerMyLibrary = document.querySelector('.header-my-library ') 
// const headerLibrary = document.querySelector('.nav-header__library'); 
const toggleRenderPopular = document.querySelector('.toggle-reander'); 
const moviesContainer = document.querySelector('.gallery-section > .container');
const togglPopular = document.querySelector('.off-itm')

btnHeaderEl.addEventListener('click', onClickPagination);
paginationEl.addEventListener('click', onClickPagination);
headerMyLibrary.addEventListener('click', onClickPagination)
headerHome.addEventListener('click', onClickPagination)
toggleRenderPopular.addEventListener('click', onClickPagination)
import { onClickWatched, onClickQueue, onClickLibrary } from './render-library';
import { filmApiService, onPaginationWithQuery } from './render-movies-grid';
import renderDefaultMovies from './render-movies-grid';
import {renderDefaultMoviesPopularOnWeek} from './render-movies-grid';



// ===============================================
const renderLibraryEl = document.querySelector('.render-library-js');
const renderWatchedEl = document.querySelector('.render-watched-js');
const renderQueueEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');


renderLibraryEl.addEventListener('click', onRenderMyLibrary);
renderWatchedEl.addEventListener('click', onClickWatched);
renderQueueEl.addEventListener('click', onClickPagination);
// ==================================================

//Функция описывает логику отображения пагинации и ренедерит её

export function onRenderPagination(totalPages, pageNumber) {
  let paginationItem = '';
  let activePage;
  let backPage = pageNumber - 1;
  let nextPage = pageNumber + 1;

  if (pageNumber > 1) {
    //если значение страницы больше 1, добавьте новый li, который является предыдущей кнопкой (onclick="onPagesSwitcher(totalPages, ${pageNumber - 1})")
    paginationItem += `<li class="pagination-item pagination-back"><span class="pagination-arrow-back">&#8701</span></li>`;
  }

  if (pageNumber > 3) {
    //если значение страницы больше 2, добавьте новый тег li (onclick="onPagesSwitcher(totalPages, 1)")
    paginationItem += `<li class="mobile-hidden pagination-item pagination-numb "><span>1</span></li>`;
    if (pageNumber > 4) {
      //если значение страницы больше 3, добавьте новый тег ...
      paginationItem += `<li class="mobile-hidden pagination-item pagination-dots"><span><sup>...</sup></span></li>`;
    }
  }
  //сколько страниц или li показывают до текущего li
  if (pageNumber === totalPages) {
    backPage = backPage - 2;
  } else if (pageNumber === totalPages - 1) {
    backPage = backPage - 1;
  }

  //сколько страниц или li показывают после текущего li
  if (pageNumber === 1) {
    nextPage = nextPage + 2;
  } else if (pageNumber === 2) {
    nextPage = nextPage + 1;
  }

  for (let pageLength = backPage - 1; pageLength <= nextPage + 1; pageLength += 1) {
    if (pageLength > totalPages) {
      continue;
    }

    if (pageLength <= 0) {
      pageLength = 1;
    }

    if (pageNumber === pageLength) {
      //если значение страницы равно pageLenght, то проверка активной строки в переменной activeLi
      activePage = 'pagination-active';
    } else {
      // иначе оставьте пустым для переменной activeLi
      activePage = '';
    }
    paginationItem += `<li class="pagination-item pagination-numb ${activePage}"><span>${pageLength}</span></li>`; //onclick="onPagesSwitcher(totalPages, ${pageLength})"
  }

  if (pageNumber < totalPages - 2) {
    //если значение страницы меньше totalpages на 1, то показать последний li или страницу, которая является 176 новым тегом li

    if (pageNumber < totalPages - 3) {
      //если значение страницы меньше totalpages на 2, то показать последний (...) предпоследний
      paginationItem += `<li class="mobile-hidden pagination-item pagination-dots"><span><sup>...</sup></span></li>`;
    }
    paginationItem += `<li class="mobile-hidden pagination-item pagination-numb"><span>${totalPages}</span></li>`; //(onclick="onPagesSwitcher(totalPages, ${totalPages}))
  }

  if (pageNumber < totalPages) {
    //(onclick="onPagesSwitcher(totalPages, ${pageNumber + 1})")если значение страницы меньше, чем значение totalPages, тогда добавьте новый li, который будет следующей кнопкой
    paginationItem += `<li class="pagination-item pagination-next"><span class="pagination-arrow-next">&#8702</span></li>`;
  }

  paginationEl.innerHTML = paginationItem;
}

//Функция пересчитывает номер страницы в зависимости от нажатия на пагинацию.
//отвечает и за навигацию по приложению.

export function onClickPagination(event) {
  if (event.target === event.currentTarget) return;

  if (Number(event.target.textContent)) {
    filmApiService.page = Number(event.target.textContent);
  }
  const arrow = event.target.classList.value;
  if (arrow.includes('pagination-arrow-next') || arrow.includes('pagination-next')) {
    filmApiService.incrementPage();
  }
  if (arrow.includes('pagination-arrow-back') || arrow.includes('pagination-back')) {
    filmApiService.decrementPage();
  }

  const btnHeader = event.target.classList.value;
  const NavHeader = event.target.classList.value;
 const btnToggle = event.target.classList.value;
  if (filmApiService.query !== '') {
    onPaginationWithQuery();
  } else if (btnHeader.includes('render-library-js') === true) {
    onClickLibrary();
  }
  // else if (btnToggle.includes('active-toggle') === true) {
  //   renderDefaultMoviesPopularOnWeek();
  // } else if (btnToggle.includes('active-toggle') === false) {
  //   renderDefaultMovies();
  // }
  else if (NavHeader.includes('librari-nav__queue') === true) {
    onClickQueue();
  }  else if( NavHeader.includes('librari-nav__wach') === true) {
    onClickWatched()
  }else {
    renderDefaultMovies();
  }

 if (event.target === event.currentTarget) return;
  const btnLibrary = event.target.classList.value;
  if (btnLibrary.includes('nav-header__library') === true || btnLibrary.includes('render-library-js') === true) {
    console.log('Вход в библиотеку')
    onRenderMyLibrary();
    onClickLibrary();
  }
  
  if (event.target === event.currentTarget) return;
  const btnHomeLogo = event.target.classList.value;
  if (btnHomeLogo.includes('nav-header__home') === true || btnHomeLogo.includes('logo-header__text') === true || btnHomeLogo.includes('logo-header__svg') === true) {
    console.log('Вход на главную')
    filmApiService.resetPage();
    onReturnMainPage()
    renderDefaultMovies();
    onRenderPagination();
  }
// if (event.target === event.currentTarget) return;
  const btnQueue = event.target.classList.value;
  console.log(btnQueue)
  if (btnQueue.includes('librari-nav__queue') === true) {
    onRenderQueue();
    onClickQueue();
  }
  const btnWatched = event.target.classList.value;
  if (btnWatched.includes('librari-nav__wach') === true) {
    onRenderWatched();
    onClickWatched();
  }
  const btnToggleIsActiv = event.target.classList.value;
  console.log(btnToggle)
  if (btnToggleIsActiv .includes('off-itm') === true) {
    onActivToggle()
  } 

  btnHeaderEl.scrollIntoView({
                behavior: "smooth",
                block: "start",
                inline: "nearest"
            })
}

// Меняет стили при нажатии на хоум или лого
function onReturnMainPage() {
  headerMyLibrary.classList.add('not-active');
  headerHome.classList.remove('not-active');

  toggleRenderPopular.classList.remove('active');
}
// Меняет стили при нажатии на библиотеку
function onRenderMyLibrary () {
  headerHome.classList.add('not-active')
  headerHome.classList.remove('active')
	headerMyLibrary.classList.remove('not-active')	
	toggleRenderPopular.classList.add('active')
  
  moviesContainer.innerHTML = "";
  // =================================
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
renderContainer.innerHTML = '';
}
// Меняет стили при нажатии на кнопку кюе в библиотеке
function onRenderQueue() {
   renderWatchedEl.classList.remove('active');
  renderQueueEl.classList.add('active');
  renderContainer.innerHTML = '';
}
// Меняет стили при нажатии на кнопку вотч в библиотеке
function onRenderWatched() {
  renderWatchedEl.classList.add('active');
  renderQueueEl.classList.remove('active');
  renderContainer.innerHTML = '';
  
}

function onActivToggle() {
  togglPopular.classList.toggle('active-toggle');
  // togglPopular.classList.toggle('active-toggle');
}

// function onOffToggle() {
//   togglPopular.classList.remove('active-toggle');
//   // togglPopular.classList.toggle('active-toggle');
// }