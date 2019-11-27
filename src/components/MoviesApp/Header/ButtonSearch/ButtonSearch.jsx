import React from 'react'
import styles from './styles.module.css'
export default function ButtonSearch(props) {
    return (
    <input type="submit" className={styles.btnSearch} onClick = {props.onClick} />
    )
}