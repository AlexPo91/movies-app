import React, { useState } from 'react';
import { SEARCH_OPTIONS } from '../../constants/option';
import Header from './Header';
import ShowMovies from './ShowMovies';
import SortBy from './SortBy';
import FetchMovies from './FetchMovies';

export default function MoviesApp() {
  const [value, setValue] = useState('');
  const [option, setOption] = useState(SEARCH_OPTIONS.TITLE);
  const [movie, setMovie] = useState([]);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleRadioChange = (nextOption) => {
    setOption(nextOption);
  };
  const handleChange = (event) => {
    event.preventDefault();
    setValue(event.target.value);
  };
  const moviesData = async (event) => {
    event.preventDefault();
    const { data } = await FetchMovies(value, option);
    setMovie(data);
  };
  const btnSortRating = () => {
    const sortedByRating = [...movie].sort((a, b) => b.vote_average - a.vote_average);
    setMovie(sortedByRating);
  };
  const btnSortDate = () => {
    const sortedByData = [...movie].sort((a, b) => new Date(b.release_date).getFullYear()
    - new Date(a.release_date).getFullYear());
    setMovie(sortedByData);
  };
  return (
    <>
      <Header
        value={value}
        onRadioChange={handleRadioChange}
        onChange={handleChange}
        onClick={moviesData}
        option={option}
      />
      <SortBy btnSortRating={btnSortRating} btnSortDate={btnSortDate} movie={movie} />
      <ShowMovies movie={movie} isModalOpen={isModalOpen} setIsModalOpen={setIsModalOpen} />
    </>
  );
}
