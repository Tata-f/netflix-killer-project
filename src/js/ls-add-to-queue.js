import {onClickQueue} from './render-library'
import { filmLibrary } from './render-library';

const renderLibraryEl = document.querySelector('.render-queue-js');
const headerEl = document.querySelector('.header-main')
const renderContainer = document.querySelector('.gallery-section > .container');
const libraryIsActive = () => renderLibraryEl.classList.contains('active');
const libraryIsNotActive = () => headerEl.classList.contains('not-active');

export default function addToLockalS(filmUser) {
  const btnQueueEl = document.querySelector('.btn-queue-js');
  const removeQueueBtnRender = () => {
  btnQueueEl.innerText = 'remove from queue';
  btnQueueEl.classList.add('modal-button-color');
  }
  
  if (!localStorage.queueFilm) {
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
  } else {
      const filmsStr = localStorage.getItem('queueFilm');
      btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        removeQueueBtnRender()
        btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
      }
    }
  function onClickBtnAddToQueue() {
    if (!localStorage.queueFilm) {
      const films = [];
      films.push(filmUser);
      localStorage.setItem(`queueFilm`, JSON.stringify(films));
      removeQueueBtnRender()
      if(libraryIsActive() && libraryIsNotActive()){
        onClickQueue();
      }
    } else {
        const filmsStr = localStorage.getItem('queueFilm');
        
        if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
          removeQueueBtnRender()
          onClickBtnRemoveToQueue();
        } else {
            const filmsArr = JSON.parse(filmsStr);
            filmsArr.push(filmUser);
            localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
            removeQueueBtnRender()
            if(libraryIsActive() && libraryIsNotActive()){
              onClickQueue();
            }
          }
      }
  }

  function onClickBtnRemoveToQueue() {
    let width = document.body.clientWidth;
    
    const filmsStr = localStorage.getItem('queueFilm');
    const filmsArr = JSON.parse(filmsStr);
    const addQueueBtnRender = () => {
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color');
      btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
    }
    const addFilmInCollection = (arr) => localStorage.setItem(`queueFilm`, JSON.stringify(arr));
    const libraryTest = filmsArr.filter(film => {
        return film.id !== filmUser.id;
      });
    const resetContainer = () => renderContainer.innerHTML='';
    
    if (filmsArr.length === 1) {
      localStorage.removeItem('queueFilm');
      addQueueBtnRender()

      if(libraryIsActive() && libraryIsNotActive()){
        onClickQueue();
        resetContainer()
      }
      return;
    }
    if(filmsArr.length%9===1 && width > 1023){
      let pages = Math.ceil(filmsArr.length/9);
      addFilmInCollection(libraryTest);
      addQueueBtnRender()
      if(libraryIsActive() && libraryIsNotActive()){

        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickQueue();
        resetContainer()
      }
    }
        if(filmsArr.length%4===1 && width < 768){
          let pages = Math.ceil(filmsArr.length/4);

          addFilmInCollection(libraryTest);
          addQueueBtnRender()
          if(libraryIsActive() && libraryIsNotActive()){

            if (pages === filmLibrary.pageLib) {
              filmLibrary.decrementPageLib();
            }
            onClickQueue();
            resetContainer()
          }
        }

    if(filmsArr.length%6===1 && width > 767 && width < 1024){
      let pages = Math.ceil(filmsArr.length/6);

      addFilmInCollection(libraryTest);
      addQueueBtnRender()
      if(libraryIsActive() && libraryIsNotActive()){
        if (pages === filmLibrary.pageLib) {
          filmLibrary.decrementPageLib();
        }
        onClickQueue();
        resetContainer()
      }
    }

    if (filmsArr.length > 1) {
      addFilmInCollection(libraryTest);
      if(libraryIsActive() && libraryIsNotActive()){
        onClickQueue();
      }
      addQueueBtnRender()
    }
  }
}