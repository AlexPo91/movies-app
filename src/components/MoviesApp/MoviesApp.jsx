import React, {useState} from 'react'
import Header from './Header'
import ShowMovies from './ShowMovies'
import SortBy from './SortBy'



function Modal({ visible, onClick, children }) {
    return <div onClick={onClick} style={{ position: 'absolute', top: 0, left: 0, right: 0, bottom: 0, backgroundColor: 'rgba(0,0,0,0.4)' }}>
        {children}
    </div>
}


function fetchMovies(value, option) {
    return fetch(`https://reactjs-cdp.herokuapp.com/movies?sortOrder=desc&search=${value}&searchBy=${option}&limit=20`)
    .then(data => { return data.json()})
}

const SEARCH_OPTIONS = {
    TITLE: 'title',
    GANRE: 'ganre'
}

function sortByRating(data) {
    return [...data].sort((a,b) => b.vote_average - a.vote_average) 
}


export default function MoviesApp(props) {
    
    const [value, setValue] = useState('')
    const [option, setOption] = useState(SEARCH_OPTIONS.TITLE)
    const [movie, setMovie] = useState([])

    const handleRadioChange =nextOption => {
        setOption(nextOption)
    }

    const handleChange = event => {
        event.preventDefault()
        setValue(event.target.value)
    }


    const moviesData = async (event) => {
        event.preventDefault()
        const { data } = await fetchMovies(value, option)    
        setMovie(data)
    }

    const btnSortRating = () => {
        const sortedByRating = sortByRating(movie)
        setMovie(sortedByRating)      
    }

    const btnSortDate = () => {
        const sortedByData = [...movie].sort((a,b) => {
            return new Date(b.release_date).getFullYear() - new Date(a.release_date).getFullYear()
        } )

        setMovie(sortedByData)
    }
    return (
        <React.Fragment>
            <Header value={value} onRadioChange = {handleRadioChange} onChange = {handleChange} onClick = {moviesData} option={option}/>
            <SortBy btnSortRating = {btnSortRating} btnSortDate = {btnSortDate} movie = {movie}/>
            <ShowMovies movie = {movie} />
            {/* <Modal visible={true} onBackgroundClock >
                <MovieDetails id />
            </Modal> */}
            {/* <Modal visible={true} /> */}
        </React.Fragment>
    )
}