const options = {
    BASE_URL: 'https://api.themoviedb.org/3/',
    API_KEY: 'bb99cf0123948bcb57616045b789da85',
    PAGE_NUM: 1
}


// Фетчит популярные фильмы за день 

function fetchPopularMovies() {
    return fetch(`${options.BASE_URL}trending/movie/day?api_key=${options.API_KEY}&page=${options.PAGE_NUM}`)
        .then(response => response.json()).then(({ results }) => {
            return fetchGenresArray().then(genresArray => {
                return results.map(movie => ({
                    ...movie,
                    genres: genresArray.filter(genre => movie.genre_ids.includes(genre.id)).map(({ name }) => name).join(', '),
                    releaseYear: movie.release_date ? movie.release_date.slice(0, 4) : 'n/a'
                
                }));
            })
        })
}
 

function fetchGenresArray() {
    return fetch(`${options.BASE_URL}genre/movie/list?api_key=${options.API_KEY}&page=${options.PAGE_NUM}`)
      .then(response => {
        return response.json();
      })
        .then(({ genres }) => {
        return genres;
      });
};



export {fetchPopularMovies, options, fetchGenresArray};