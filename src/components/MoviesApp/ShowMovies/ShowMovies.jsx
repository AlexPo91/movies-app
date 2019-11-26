import React from 'react'
//import ButtonSearch from '../Header/ButtonSearch'
import styles from './styles.module.css'


export default function ShowMovies(props) {
    return (
        <div className="container">
            {props.movie.map(item => {
                return (
                    <div key={item.id}>
                        <img src ={item.poster_path}  alt = ""/>
                                    <h2 className = 'title'> {item.title}</h2>
                                    <h3 className = 'genres'> {item.genres} </h3>
                                    <p className = 'years'> {item.release_date}</p>
                    </div>
                )
            })}
            </div>
 
    )
}