import './Movies.css'
import MovieCard from './MovieCard'

export default function Movies({ movies, error }) {
	return movies?.length > 0 && !error ? (
		<div className='movies-cont'>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	) : (
		<div className='no-result-cont'>
			<p>No results.</p>
		</div>
	)
}
