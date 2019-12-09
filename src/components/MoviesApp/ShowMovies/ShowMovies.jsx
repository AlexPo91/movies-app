import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';
import ModalInfo from '../ModalInfo/ModalInfo';

export default function ShowMovies({
  movie, setIsModalOpen, isModalOpen,
}) {
  const [filmPreview, setFilmPreview] = useState([]);
  const showPreview = (film) => {
    setFilmPreview(film);
  };
  return (
    <div className={styles.films_wrapper}>
      {movie.map((item) => (
        <div className={styles.film} key={item.id} onClick={() => { setIsModalOpen(true); showPreview(item); }}>
          <div className={styles.film_poster}>
            <img src={item.poster_path} alt="" />
          </div>
          <div className={styles.film_description}>
            <div className={styles.film_item}>
              <h2 className={styles.film_title}>
                {item.title}
              </h2>
              <h3 className={styles.film_genres}>
                {(item.genres).join(', ')}
              </h3>
            </div>
            <div className={styles.film_item}>
              <span className={styles.film_years}>
                {(item.release_date).split('-')[0]}
              </span>
            </div>
          </div>
        </div>
      ))}
      {isModalOpen && (
        <ModalInfo filmPreview={filmPreview} setIsModalOpen={setIsModalOpen} />
      )}
    </div>
  );
}
ShowMovies.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
  isModalOpen: PropTypes.bool.isRequired,
};
