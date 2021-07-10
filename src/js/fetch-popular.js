const options = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: 'bb99cf0123948bcb57616045b789da85',
    PAGE_NUM: 1
}

fetchPopularMovies();

// Фетчит популярные фильмы за день

function fetchPopularMovies() {
 return fetch(`${options.BASE_URL}trending/movie/day?api_key=${options.API_KEY}&page=${options.PAGE_NUM}`)
 .then(response => {return response.json()})   
}

export default { fetchPopularMovies };
