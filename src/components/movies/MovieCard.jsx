import './MovieCard.css'

export default function MovieCard({ movie }) {
	return (
		<div className='card'>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3>{movie.title}</h3>
			<p>{movie.year}</p>
		</div>
	)
}
