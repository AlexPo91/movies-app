import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import RadioButton from '../Header/RadioButton';

export default function SortBy({
  movie, btnSortDate, btnSortRating,
}) {
  return (
    <div className={styles.menu_sort}>
      <span className={styles.movies_quantity}>
        {movie.length}
        {' '}
movies found
      </span>
      <div className={styles.sorted}>
        <span className={styles.text}>Sort by</span>
        <div className={styles.radio_toolbar_sort}>
          <RadioButton
            id="radio3"
            onChange={btnSortDate}
          />
          <label htmlFor="radio3">release date</label>
          <RadioButton

            id="radio4"
            onChange={btnSortRating}
          />
          <label htmlFor="radio4">rating</label>
        </div>
      </div>
    </div>
  );
}
SortBy.propTypes = {
  btnSortDate: PropTypes.func.isRequired,
  btnSortRating: PropTypes.func.isRequired,
}
;