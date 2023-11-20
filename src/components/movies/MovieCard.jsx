import './MovieCard.css'

export default function MovieCard({ movie }) {
	const needWrapped = movie.title.length > 26

	return (
		<div className={`card ${needWrapped ? 'small' : 'normal'}`}>
			<img src={movie.poster} alt={`${movie.title} poster`} />
			<h3 className={`${needWrapped ? 'wrapped' : ''}`}>{movie.title}</h3>
			<p>{movie.year}</p>
		</div>
	)
}
