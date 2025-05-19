export const TMDB_CONFIG={
    BASE_URL: 'https://api.themoviedb.org/3',
    API_KEY: process.env.EXPO_PUBLIC_MOVIE_API_KEY,
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${process.env.EXPO_PUBLIC_MOVIE_API_KEY}`

    }
}
export const fetchMovies = async ({query}:{query:string}) => {
    const endpoint=
    query?`${TMDB_CONFIG.BASE_URL}/search/movie?query=${encodeURIComponent(query)}`:
    
    `${TMDB_CONFIG.BASE_URL}/discover/movie?sort_by=popularity.desc`;
    const response=await fetch(endpoint, {
        method: 'GET',
        headers: TMDB_CONFIG.headers
    })
    console.log('response from apifndj bitch', response);
    if(!response.ok){
        throw new Error('Failed to fetch movies');
    }
    const data=await response.json();
    return data.results;

}

// const url = 'https://api.themoviedb.org/3/discover/movie?include_adult=false&include_video=false&language=en-US&page=1&sort_by=popularity.desc';
// const options = {
//   method: 'GET',
//   headers: {
//     accept: 'application/json',
//     Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiIyZjE1NDViYTg2ODJhMmQyMjJlMTI2MDI1NWIzZDYzYiIsIm5iZiI6MTc0NzYwOTIwNi4wOSwic3ViIjoiNjgyYTY2NzYwODI0OWQ0ODE5MGJkNmVlIiwic2NvcGVzIjpbImFwaV9yZWFkIl0sInZlcnNpb24iOjF9.N6pD_msO1nWQOvm5OCRudFDTKGtoyNR1GOiff4AQ7vk'
//   }
// };

// fetch(url, options)
//   .then(res => res.json())
//   .then(json => console.log(json))
//   .catch(err => console.error(err));