import './App.css'
import Header from './components/header/Header'
import Loader from './components/loader/Loader'
import Movies from './components/movies/Movies'
import UseInput from './hooks/UseInput'
import { UseMovies } from './hooks/UseMovies'

function App() {
	const { query, handleChange, error, sorted, handleSorted } = UseInput()
	const { movies, loading, getMovies } = UseMovies({ query, sorted })

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
			{loading === true && !error ? (
				<Loader />
			) : (
				<Movies movies={movies} error={error} />
			)}
		</div>
	)
}

export default App
