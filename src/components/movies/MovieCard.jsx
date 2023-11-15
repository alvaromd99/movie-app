import './MovieCard.css'

export default function MovieCard({ movie }) {
	return (
		<div className='card'>
			<img src={movie.Poster} alt={`${movie.Title} poster`} />
			<h3>{movie.Title}</h3>
			<p>{movie.Year}</p>
		</div>
	)
}
