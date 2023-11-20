import { useState } from 'react'
import './App.css'
import Header from './components/header/Header'
import Loader from './components/loader/Loader'
import Movies from './components/movies/Movies'
import UseInput from './hooks/UseInput'
import { UseMovies } from './hooks/UseMovies'

function App() {
	const [sorted, setSorted] = useState()
	const { query, handleChange, error } = UseInput()
	const { responseMovies, loading, getMovies } = UseMovies({ query, sorted })

	return (
		<div className='App'>
			<Header
				query={query}
				handleChange={handleChange}
				getMovies={getMovies}
				error={error}
			/>
			{loading === true ? <Loader /> : <Movies movies={responseMovies} />}
		</div>
	)
}

export default App
