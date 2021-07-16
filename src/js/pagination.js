import { onClickWatched, onClickQueue, onClickLibrary } from './render-library';
import { filmApiService, onPaginationWithQuery } from './render-movies-grid';
import { renderDefaultMovies }from './render-movies-grid';
import { renderDefaultMoviesPopularOnWeek } from './render-movies-grid';
import { filmLibrary } from './render-library';
import getRefs from './get-refs';
const refs = getRefs();

// прослушивание Для Пагинации
refs.paginationEl.addEventListener('click', onClickPagination);
//Функция описывает логику отображения пагинации и ренедерит её
function onRenderPagination(totalPages, pageNumber) {
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

  refs.paginationEl.innerHTML = paginationItem;
}

//Функция пересчитывает номер страницы в зависимости от нажатия на пагинацию.
function onClickPagination(event) {
  if (event.target === event.currentTarget) return;

  if (Number(event.target.textContent)) {
    filmApiService.page = Number(event.target.textContent);
    filmLibrary.pageLib = Number(event.target.textContent);
  }
  const arrow = event.target.classList.value;
  if (arrow.includes('pagination-arrow-next') || arrow.includes('pagination-next')) {
    filmApiService.incrementPage();
    filmLibrary.incrementPageLib();
  }
  if (arrow.includes('pagination-arrow-back') || arrow.includes('pagination-back')) {
    filmApiService.decrementPage();
    filmLibrary.decrementPageLib();
  }


  if (filmApiService.query !== '') {
    onPaginationWithQuery();
  } else if (refs.renderWatchedEl.classList.contains('active') === true && refs.headerMyLibrary.classList.contains('not-active') === false) {
    onClickLibrary();
  } else if (refs.renderQueueEl.classList.contains('active') === true && refs.headerMyLibrary.classList.contains('not-active') === false) {
    onClickQueue();
  } else if (!refs.inputTogglePopular.checked)
  { renderDefaultMoviesPopularOnWeek() }
  else {
      renderDefaultMovies();
    }

   window.scrollTo({
  top: 0,
  left: 0,
  behavior: 'smooth'
});
  }

export{onClickPagination, onRenderPagination }
