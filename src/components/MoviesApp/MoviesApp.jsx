import React, { useState } from 'react';
import Header from './Header';
import ShowMovies from './ShowMovies';
import SortBy from './SortBy';

export default function MoviesApp() {
  const [value, setValue] = useState('');
  const [url, setUrl] = useState('');
  const [option, setOption] = useState('title');
  const handleRadioChange = (event) => {
    setOption(event.nativeEvent.target.value);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
    setUrl(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${value}&searchBy=${option}&limit=20`);
  };
  const [movie, setMovie] = useState([]);
  const moviesData = (event) => {
    event.preventDefault();
    fetch(url)
      .then((data) => data.json())
      .then((parseData) => { setMovie(() => parseData.data.map((item) => item)); });
  };
  const btnSortRating = () => {
    setMovie(() => (movie.sort((a, b) => b.vote_average - a.vote_average)).map((item) => item));
  };
  const btnSortDate = () => {
    setMovie(() => movie.sort((a, b) => b.release_date.split('-')[0] - a.release_date.split('-')[0]).map((item) => item));
  };
  return (
    <>
      <Header
        value={value}
        onRadioChange={handleRadioChange}
        onChange={handleChange}
        url={url}
        onClick={moviesData}
      />
      <SortBy btnSortRating={btnSortRating} btnSortDate={btnSortDate} movie={movie} />
      <ShowMovies movie={movie} />
    </>
  );
}
