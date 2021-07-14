export default function addToLockalS(filmUser) {
  const btnQueueEl = document.querySelector('.btn-queue-js');

  if (!localStorage.queueFilm) {
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
  } else {
    const filmsStr = localStorage.getItem('queueFilm');
    btnQueueEl.addEventListener('click', onClickBtnAddToQueue);

    if (filmsStr.indexOf(`${filmUser.id}`) && filmsStr.indexOf(`${filmUser.id}`) !== -1) {
      btnQueueEl.innerText = 'remove from queue';
      btnQueueEl.addEventListener('click', onClickBtnAddToQueue);
    }
  }

  function onClickBtnAddToQueue() {
    if (!localStorage.queueFilm) {
      const films = [];

      films.push(filmUser);
      localStorage.setItem(`queueFilm`, JSON.stringify(films));
      btnQueueEl.innerText = 'remove from queue';
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
      }
    }
  }

  function onClickBtnRemoveToQueue() {
    const filmsStr = localStorage.getItem('queueFilm');
    const filmsArr = JSON.parse(filmsStr);

    if (filmsArr.length === 1) {
      localStorage.removeItem('queueFilm');
      btnQueueEl.innerText = 'add to queue';
      return;
    } else {
      if (filmsArr.length > 1) {
        for (let i = 0; i <= filmsArr.length; i++) {
          if (filmsArr[i].id === filmUser.id) {
            filmsArr.splice(i, 1);
            localStorage.setItem(`queueFilm`, JSON.stringify(filmsArr));
            btnQueueEl.innerText = 'add to queue';
            btnQueueEl.removeEventListener('click', onClickBtnRemoveToQueue);
          }
        }
      }
    }
  }
}
