import React from 'react'
import styles from './styles.module.css'
import ButtonSearch from './ButtonSearch'
export default function Header(props) {
console.log(props)
console.log(props.option)
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
            <div>
            <input
				name="lang"
				type="radio"
                value="title"
				onChange={props.onRadioChange}
			/>

			<input
				name="lang"
				type="radio"
                value="genres"
				onChange={props.onRadioChange}
			/>
      </div>
                <input type="text" value={props.value} onChange = {props.onChange}/>
                <div className = {styles.buttonPanel}>
                    <span className = {styles.text}>Search By</span>
                    <ButtonSearch  onClick = {props.onClick} option = {props.option}/>
                </div>
            </div>
        </form>
    </div>
    )
}