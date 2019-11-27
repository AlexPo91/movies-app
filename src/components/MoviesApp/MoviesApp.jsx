import React, {useState} from 'react'
import Header from './Header'
import ShowMovies from './ShowMovies'
export default function MoviesApp(props) {
    
    const [value, setValue] = useState('')
    const [url, setUrl] = useState('')
    const [option, setOption] = useState('title')
    const handleRadioChange =event => {
        setOption(event.target.value)
    }
    console.log(option)
    console.log(value)
    const handleChange = event => {
        event.preventDefault()
        setValue( event.target.value )
          setUrl (`https://reactjs-cdp.herokuapp.com/movies?sortOrder=asc&search=${value}&searchBy=${option}&limit=10`)
        }
    const [movie, setMovie] = useState([])
    const moviesData = (event) => {
        event.preventDefault()
            fetch(url)
        .then(data => {return data.json()})
        .then(parseData => {setMovie(()=>parseData.data.map(item => item))})
        }
    return (
        <React.Fragment>
            <Header value={value} onRadioChange = {handleRadioChange} onChange = {handleChange} url = {url} onClick = {moviesData}/>
            <ShowMovies movie = {movie} />
        </React.Fragment>
    )
}