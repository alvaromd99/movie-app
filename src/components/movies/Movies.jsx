import './Movies.css'
import MovieCard from './MovieCard'

export default function Movies({ movies }) {
	return (
		<div className='movies-cont'>
			{movies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}
