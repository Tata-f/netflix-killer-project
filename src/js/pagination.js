import API from './fetch-popular.js';


//=======Логика отображения страниц=============

const paginationEl = document.querySelector('.pagination-list');

let totalPages = 176;


function onRenderPagesSwitcher(totalPages, page) {
    let paginationItem = '';
    let activePage;
    let backPage = page - 1;
    let nextPage = page + 1;

    if (page > 1) { //если значение страницы больше 1, добавьте новый li, который является предыдущей кнопкой
        paginationItem += `<li class="pagination-item pagination-back"  onclick="onPagesSwitcher(totalPages, ${page - 1})"><span class="pagination-arrow">&#129120</span></li>`;
    }

    if (page > 2) { //если значение страницы больше 2, добавьте новый тег li
        paginationItem += `<li class="mobile-hidden pagination-item pagination-numb onclick="onPagesSwitcher(totalPages, 1)""><span>1</span></li>`;
        if (page > 3) { //если значение страницы больше 3, добавьте новый тег ...
            paginationItem += `<li class="mobile-hidden pagination-item pagination-dots"><span><sup>...</sup></span></li>`;
        }
    }
    //сколько страниц или li показывают до текущего li
    if (page === totalPages) {
        backPage = backPage - 2;
    } else if (page === totalPages - 1) {
        backPage = backPage - 1;
    }

    //сколько страниц или li показывают после текущего li
    if (page === 1) {
        nextPage = nextPage + 2;
    } else if (page === 2) {
        nextPage = nextPage + 1;
    }

    for (let pageLength = backPage - 1; pageLength <= nextPage + 1; pageLength += 1) {
        if (pageLength > totalPages) {
            continue;
        }

        if (pageLength <= 0) {
            pageLength = 1;
        }

        if (page === pageLength) { //если значение страницы равно pageLenght, то проверка активной строки в переменной activeLi
            activePage = 'pagination-active';
        } else { // иначе оставьте пустым для переменной activeLi
            activePage = '';
        }
        paginationItem += `<li class="pagination-item pagination-numb ${activePage}" onclick="onPagesSwitcher(totalPages, ${pageLength})"><span>${pageLength}</span></li>`;
    }

    if (page < totalPages-1) { //если значение страницы меньше totalpages на 1, то показать последний li или страницу, которая является 176 новым тегом li
       
        if (page < totalPages-2) {//если значение страницы меньше totalpages на 2, то показать последний (...) предпоследний
             paginationItem += `<li class="mobile-hidden pagination-item pagination-dots"><span><sup>...</sup></span></li>`;        
        }
        paginationItem += `<li class="mobile-hidden pagination-item pagination-numb" onclick="onPagesSwitcher(totalPages, ${totalPages})"><span>${totalPages}</span></li>`;
    }

    if (page < totalPages) {//если значение страницы меньше, чем значение totalPages, тогда добавьте новый li, который будет следующей кнопкой
        paginationItem += `<li class="pagination-item pagination-next" onclick="onPagesSwitcher(totalPages, ${page + 1})"><span class="pagination-arrow">&#129122</span></li>`;
    }

    paginationEl.innerHTML = paginationItem;
}
onRenderPagesSwitcher(totalPages, 25);//сюда подключить данные из API

//======= Черновики=============

// const backBtnEl = document.querySelector('.pagination-back');
// const nextBtnEl = document.querySelector('.pagination-next');

// backBtnEl.addEventListener('click', onBackClick);
// nextBtnEl.addEventListener('click', onNextClick);


// function onBackClick() {
//     console.log("щёлк назад");
    
    
// };

// function onNextClick() {
//     console.log("щёлк вперёд");
    
    
// }
// onPagesSwitcher(totalPages, pageNumber);

// onclick="onPagesSwitcher(totalPages, ${page-1})"