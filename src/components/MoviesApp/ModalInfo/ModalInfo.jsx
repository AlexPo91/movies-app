import React from 'react';
import PropTypes from 'prop-types';
import styles from './styles.module.css';

export default function ModalInfo({ filmPreview, setIsModalOpen }) {
  return (
    <div
      className={styles.film_preview_wrapper}
      onClick={(event) => {
        event.preventDefault();
        setIsModalOpen(false);
      }}
    >
      <div className={styles.film_preview}>

        <img src={filmPreview.poster_path} alt="" className={styles.film_priview_image} />
        <div className={styles.film_info}>
          <h2 className={styles.title}>
            {filmPreview.title}
          </h2>
          <h3 className={styles.genres}>
            {(filmPreview.genres).join(', ')}
          </h3>
          <p className={styles.film_overview}>{filmPreview.overview}</p>
          <p className={styles.film_budget}>
Budget:
            {' '}
            {filmPreview.budget}
$
          </p>
        </div>
      </div>
    </div>
  );
}
ModalInfo.propTypes = {
  setIsModalOpen: PropTypes.func.isRequired,
};
