import './Header.css'
import MovieIcon from '../../icons/MovieIcon'

export default function Header({ query, handleChange, getMovies, error }) {
	const handleSubmit = (event) => {
		event.preventDefault()
		getMovies()
	}

	return (
		<div className='header'>
			<div className='title'>
				<MovieIcon />
				<h1>Movies Search</h1>
			</div>
			<div>
				<form onSubmit={handleSubmit} className='form' id='search'>
					<div className={`input-bg ${error ? 'wrong' : ''} `}>
						<input
							value={query}
							onChange={handleChange}
							type='text'
							name='movieQuery'
							placeholder='Avengers, Star Wars...'
						/>
					</div>
					<button type='submit'>SEARCH</button>
				</form>
				{error && <p className='error-msg'>{`* ${error}`}</p>}
			</div>
		</div>
	)
}
