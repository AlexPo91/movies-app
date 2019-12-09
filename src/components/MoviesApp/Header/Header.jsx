import React from 'react';
import PropTypes from 'prop-types';
import { SEARCH_OPTIONS } from '../../../constants/option';
import styles from './styles.module.css';
import ButtonSearch from './ButtonSearch';
import RadioButton from './RadioButton';

export default function Header({
  onChange, onRadioChange, value, onClick, option,
}) {
  return (
    <div className={styles.header}>
      <div className={styles.content}>
        <h1 className={styles.title}>
            Search Films
        </h1>
        <form onSubmit={onChange}>
          <span className={styles.subtitle}>
                find your movie
          </span>
          <div className={styles.search_form}>
            <input type="text" value={value} onChange={onChange} className={styles.search_input} />
            <ButtonSearch onClick={onClick} />
            <div className={styles.button_panel}>
              <span className={styles.text}>Search By</span>
              <div className={styles.radio_toolbar}>
                <RadioButton
                  id="radio1"
                  checked={option === SEARCH_OPTIONS.TITLE}
                  onChange={() => onRadioChange(SEARCH_OPTIONS.TITLE)}
                />
                <label htmlFor="radio1">{SEARCH_OPTIONS.TITLE}</label>
                <RadioButton
                  id="radio2"
                  checked={option === SEARCH_OPTIONS.GENRES}
                  onChange={() => onRadioChange(SEARCH_OPTIONS.GENRES)}
                />
                <label htmlFor="radio2">{SEARCH_OPTIONS.GENRES}</label>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
Header.propTypes = {
  onChange: PropTypes.func.isRequired,
  onRadioChange: PropTypes.func.isRequired,
  value: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  option: PropTypes.string.isRequired,
};
