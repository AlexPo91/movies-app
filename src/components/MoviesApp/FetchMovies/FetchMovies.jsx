
export default function FetchMovies(value, option) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortBy=vote_average&sortOrder=desc&search=${value}&searchBy=${option}&limit=20`)
    .then((data) => data.json());
}
