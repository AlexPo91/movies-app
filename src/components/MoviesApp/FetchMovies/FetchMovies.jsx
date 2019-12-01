
export default function FetchMovies(value, option) {
  return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${value}&searchBy=${option}&limit=20`)
    .then((data) => data.json());
}
