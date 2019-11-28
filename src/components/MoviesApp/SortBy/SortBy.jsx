import React from 'react'
export default function SortBy(props) {
   return (
        <div>
<span>{props.movie.length} movies found</span>
            <span>Sort by</span>
            <button onClick = {props.btnSortDate}>release date</button> 
            <button onClick = {props.btnSortRating}>rating</button> 
        </div>   
    )
}