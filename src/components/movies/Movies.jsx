import './Movies.css'
import data from '../../mocks/data.json'
import MovieCard from './MovieCard'

export default function Movies() {
	const movies = data.Search
	return (
		<div className='movies-cont'>
			{movies.map((movie) => (
				<MovieCard key={movie.imdbID} movie={movie} />
			))}
		</div>
	)
}
