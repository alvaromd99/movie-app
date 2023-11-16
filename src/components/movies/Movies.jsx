import './Movies.css'
import MovieCard from './MovieCard'
import { UseMovies } from '../../hooks/UseMovies'

export default function Movies() {
	const { movies: mappedMovies } = UseMovies()
	return (
		<div className='movies-cont'>
			{mappedMovies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}
