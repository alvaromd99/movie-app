import './Header.css'
import MovieIcon from '../../icons/MovieIcon'

export default function Header({ query, handleChange }) {
	/* const deferredQuery = useDeferredValue(query) */

	const handleSubmit = (event) => {
		event.preventDefault()
	}

	return (
		<div className='header'>
			<div className='title'>
				<MovieIcon />
				<h1>Movies Search</h1>
			</div>
			<form onSubmit={handleSubmit} className='form' id='search'>
				<div className='input-bg'>
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
		</div>
	)
}
