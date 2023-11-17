import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Movies from './components/movies/Movies'
import UseInput from './hooks/UseInput'
import { UseMoviesDelete } from './hooks/UseMoviesDelete'

function App() {
	const { query, handleChange, error } = UseInput()
	const [movies, setMovies] = useState([])

	const { movies: mappedMovies } = UseMoviesDelete()

	return (
		<div className='App'>
			<Header query={query} handleChange={handleChange} error={error} />
			<Movies movies={mappedMovies} />
		</div>
	)
}

export default App
