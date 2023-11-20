import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Loader from './components/loader/Loader'
import Movies from './components/movies/Movies'
import UseInput from './hooks/UseInput'
import { UseMovies } from './hooks/UseMovies'

function App() {
	const [sorted, setSorted] = useState(false)
	const { query, handleChange, error } = UseInput()
	const { movies, loading, getMovies } = UseMovies({ query, sorted })

	const handleSorted = () => {
		setSorted(!sorted)
	}

	return (
		<div className='App'>
			<Header
				query={query}
				handleChange={handleChange}
				getMovies={getMovies}
				error={error}
				sorted={sorted}
				handleSorted={handleSorted}
			/>
			{loading === true ? <Loader /> : <Movies movies={movies} />}
		</div>
	)
}

export default App
