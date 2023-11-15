import './Movies.css'
import data from '../../mocks/data.json'
import MovieCard from './MovieCard'

export default function Movies() {
	const movies = data.Search

	// Avoid using apis names
	const mappedMovies = movies.map((m) => ({
		title: m.Title,
		year: m.Year,
		id: m.imdbID,
		type: m.Type,
		poster: m.Poster,
	}))

	return (
		<div className='movies-cont'>
			{mappedMovies.map((movie) => (
				<MovieCard key={movie.id} movie={movie} />
			))}
		</div>
	)
}
