import React from 'react';
import { SEARCH_OPTIONS } from '../../../constants/option';
import styles from './styles.module.css';
import ButtonSearch from './ButtonSearch';
import RadioButton from './RadioButton';

export default function Header({
  onChange, onRadioChange, value, onClick, option,
}) {
  return (
    <div className={styles.header}>
      <h1 className={styles.title}>
            Search Films
      </h1>
      <form onSubmit={onChange}>
        <span className={styles.subtitle}>
                find your movie
        </span>
        <div className={styles.searchForm}>
          <div>
            <RadioButton
              value={option === SEARCH_OPTIONS.TITLE}
              onChange={() => onRadioChange(SEARCH_OPTIONS.TITLE)}
            />
            <RadioButton
              value={option === SEARCH_OPTIONS.GENRES}
              onChange={() => onRadioChange(SEARCH_OPTIONS.GENRES)}
            />
          </div>
          <input type="text" value={value} onChange={onChange} />
          <div className={styles.buttonPanel}>
            <span className={styles.text}>Search By</span>
            <ButtonSearch onClick={onClick} />
          </div>
        </div>
      </form>
    </div>
  );
}
