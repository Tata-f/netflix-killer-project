import {onClickLibrary} from './render-library'
import { filmLibrary } from './render-library';

const renderLibraryEl = document.querySelector('.render-watched-js');
const headerEl = document.querySelector('.header-main')
const renderContainer = document.querySelector('.gallery-section > .container');

export default function addToLockalS(filmUser) {
  const btnWatchedEl = document.querySelector('.btn-watched-js');

  if (!localStorage.watchedFilm) {
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
  } else {
    const filmsStr = localStorage.getItem('watchedFilm');
    btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.classList.add('modal-button-color')
      btnWatchedEl.addEventListener('click', onClickBtnAddToWatched);
    }
  }

  function onClickBtnAddToWatched() {

    if (!localStorage.watchedFilm) {
      console.log('в onClickBtnAddToWatched условие 1');
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`watchedFilm`, JSON.stringify(films));
      btnWatchedEl.innerText = 'remove from watched';
      btnWatchedEl.classList.add('modal-button-color')
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickLibrary();
      }
    } else {
      console.log('в onClickBtnAddToWatched условие 1 else');
      const filmsStr = localStorage.getItem('watchedFilm');
      

      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        console.log('в onClickBtnAddToWatched условие 2');

        btnWatchedEl.innerText = 'remove from watched';
        btnWatchedEl.classList.add('modal-button-color')
        onClickBtnRemoveToWatched();
      } else {
        console.log('в onClickBtnAddToWatched условие 2 else');
        const filmsArr = JSON.parse(filmsStr);

        filmsArr.push(filmUser);
        localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
        btnWatchedEl.innerText = 'remove from watched';
        btnWatchedEl.classList.add('modal-button-color')
        if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
          console.log('в onClickBtnAddToWatched условие 3');
          if (filmsArr.length === filmLibrary.pageLib) {
            
            filmLibrary.incrementPageLib()
          }
          onClickLibrary();
        }
      }
    }
  }

  function onClickBtnRemoveToWatched() {
    // btnWatchedEl.classList.remove('modal-button-color')

    const filmsStr = localStorage.getItem('watchedFilm');
    const filmsArr = JSON.parse(filmsStr);

    if (filmsArr.length === 1) {
      localStorage.removeItem('watchedFilm');
      btnWatchedEl.innerText = 'add to watched';
      btnWatchedEl.classList.remove('modal-button-color')
      if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
        onClickLibrary();
        renderContainer.innerHTML='';
      }
      return;
    } 

    if(filmsArr.length%9===1||filmsArr.length%6===1||filmsArr.length%4===1){
      let pages = Math.ceil(filmsArr.length/9);
      for (let i = 0; i <= filmsArr.length; i++) {
        if (filmsArr[i].id === filmUser.id) {
          console.log(`${i} ID в Watched, условие с остатком от деления`);
          filmsArr.splice(i, 1);
          localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
          btnWatchedEl.innerText = 'add to watched';
          btnWatchedEl.classList.remove('modal-button-color')
          btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
          if(renderLibraryEl.classList.contains('active') && headerEl.classList.contains('not-active')){
            
            if (pages === filmLibrary.pageLib) {
              
              
              filmLibrary.decrementPageLib();
            }
            onClickLibrary();
            renderContainer.innerHTML='';
          }
        } else {
          console.log('Нет такого ID в Watched, условие с остатком от деления');
        }
      }
    }
      
    if (filmsArr.length > 1) {
        for (let i = 0; i <= filmsArr.length; i++) {
          if (filmsArr[i].id === filmUser.id) {
            console.log(filmsArr[i].id);
            console.log(`${i} ID в Watched, условие с длиной >1`);
            filmsArr.splice(i, 1);
            localStorage.setItem(`watchedFilm`, JSON.stringify(filmsArr));
            if(renderLibraryEl.classList.contains('active')&& headerEl.classList.contains('not-active')){
              onClickLibrary();
            }
            btnWatchedEl.innerText = 'add to watched';
            btnWatchedEl.classList.remove('modal-button-color')
            btnWatchedEl.removeEventListener('click', onClickBtnRemoveToWatched);
          } else {
            console.log('Нет такого ID в Watched, условие с длиной >1');
            continue;
          }
        }
      
    }
  }
}
