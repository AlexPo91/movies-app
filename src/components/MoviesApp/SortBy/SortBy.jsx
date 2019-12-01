
import React from 'react';

export default function SortBy({ movie, btnSortDate, btnSortRating }) {
  return (
    <div>
      <span>
        {movie.length}
        {' '}
movies found
      </span>
      <span>Sort by</span>
      <button onClick={btnSortDate}>release date</button>
      <button onClick={btnSortRating}>rating</button>
    </div>
  );
}
