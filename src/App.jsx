import './App.css'
import Header from './components/header/Header'
import Movies from './components/movies/Movies'
import UseInput from './hooks/UseInput'
import { UseMovies } from './hooks/UseMovies'

function App() {
	const { query, handleChange, error } = UseInput()
	const { responseMovies, getMovies } = UseMovies({ query })

	return (
		<div className='App'>
			<Header
				query={query}
				handleChange={handleChange}
				getMovies={getMovies}
				error={error}
			/>
			<Movies movies={responseMovies} />
		</div>
	)
}

export default App
