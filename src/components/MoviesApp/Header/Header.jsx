import React from 'react'
import styles from './styles.module.css'
import ButtonSearch from './ButtonSearch'


function RadionButton({ checked, onChange }) {
    return (
        <input
            name="lang"
            type="radio"          
            checked={checked}
            onChange={onChange}
    />
    )
}




export default function Header({ onChange, onRadioChange, value, option, onClick }) {
    console.log(option)
    return (
        <div className= {styles.header}>
        <h1 className ={styles.title}>
            Search Films
        </h1>
        <form onSubmit = {onChange}>
            <span className = {styles.subtitle}>
                find your movie
            </span>
            <div className = {styles.searchForm}>
            <div>
            <RadionButton
                checked={option === 'title'}
				onChange={() => onRadioChange('title')}
			/>
             <RadionButton
                hecked={option === 'genres'}
				onChange={() => onRadioChange('genres')}
               
			/>
			
      </div>
                <input type="text" value={value} onChange = {onChange}/>
                <div className = {styles.buttonPanel}>
                    <span className = {styles.text}>Search By</span>
                    <ButtonSearch  onClick = {onClick} option = {option}/>
                </div>
            </div>
        </form>
    </div>
    )
}