import {onClickQueue} from './render-library'
import { filmLibrary } from './render-library';

const renderLibraryEl = document.querySelector('.render-queue-js');
const renderContainer = document.querySelector('.gallery-section > .container');

export default function addToLockalS(filmUser) {
  const btnQueueEl = document.querySelector('.btn-queue-js');

  if (!localStorage.queueFilm) {
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
  } else {
    const filmsStr = localStorage.getItem('queueFilm');
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnQueueEl.innerText = 'remove from queue';
      btnQueueEl.classList.add('modal-button-color')
      btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
    }
  }

  function onClickBtnAddToQueue() {

    if (!localStorage.queueFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`queueFilm`, JSON.stringify(films));
      btnQueueEl.innerText = 'remove from queue';
      btnQueueEl.classList.add('modal-button-color')
      if(renderLibraryEl.classList.contains('active')){
        onClickQueue();
      }
    } else {
      const filmsStr = localStorage.getItem('queueFilm');

      if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
        btnQueueEl.innerText = 'remove from queue';
        onClickBtnRemoveToQueue();
      } else {
        const filmsArr = JSON.parse(filmsStr);

        filmsArr.push(filmUser);
        localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
        btnQueueEl.innerText = 'remove from queue';
        btnQueueEl.classList.add('modal-button-color')
        if(renderLibraryEl.classList.contains('active')){
          onClickQueue();
        }
      }
    }
  }

  function onClickBtnRemoveToQueue() {
    const filmsStr = localStorage.getItem('queueFilm');
    const filmsArr = JSON.parse(filmsStr);

    if (filmsArr.length === 1) {
      localStorage.removeItem('queueFilm');
      btnQueueEl.innerText = 'add to queue';
      btnQueueEl.classList.remove('modal-button-color')
      if(renderLibraryEl.classList.contains('active')){
        onClickQueue();
        renderContainer.innerHTML='';
      }
      return;
    } 

    if(filmsArr.length%9===1||filmsArr.length%6===1||filmsArr.length%4===1){
      for (let i = 0; i <= filmsArr.length; i++) {
        if (filmsArr[i].id === filmUser.id) {
          filmsArr.splice(i, 1);
          localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
          btnQueueEl.innerText = 'add to queue';
          btnQueueEl.classList.remove('modal-button-color')
          btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
          if(renderLibraryEl.classList.contains('active')){
            filmLibrary.decrementPageLib();
            onClickQueue();
            renderContainer.innerHTML='';
          }
        }
      }
    }

    if (filmsArr.length > 1) {
        for (let i = 0; i <= filmsArr.length; i++) {
          if (filmsArr[i].id === filmUser.id) {
            filmsArr.splice(i, 1);
            localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
            btnQueueEl.innerText = 'add to queue';
            btnQueueEl.classList.remove('modal-button-color')
            btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
            if(renderLibraryEl.classList.contains('active')){
              onClickQueue();
            }
          }
        }
      }
    
  }
}
