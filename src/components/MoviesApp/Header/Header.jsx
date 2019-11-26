import React from 'react'
import styles from './styles.module.css'
import ButtonSearch from './ButtonSearch'
export default function Header(props) {
    return (
        <div className= {styles.header}>
        <h1 className ={styles.title}>
            Search Films
        </h1>
        <form onSubmit = {props.onChange}>
            <span className = {styles.subtitle}>
                find your movie
            </span>
            <div className = {styles.searchForm}>
                <input type="text" value={props.value} onChange = {props.onChange}/>
                <div className = {styles.buttonPanel}>
                    <span className = {styles.text}>Search By</span>
                    <ButtonSearch  value = {props.value} url = {props.url} onClick = {props.onClick}/>
                </div>
            </div>
        </form>
    </div>
    )
}