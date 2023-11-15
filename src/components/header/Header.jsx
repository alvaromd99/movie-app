import './Header.css'
import MovieIcon from '../../icons/MovieIcon'

export default function Header() {
	return (
		<div className='header'>
			<div className='title'>
				<MovieIcon />
				<h1>Movies Search</h1>
			</div>
			<form className='form' id='search'>
				<div className='input-bg'>
					<input
						type='text'
						name='movie'
						placeholder='Avengers, Star Wars...'
					/>
				</div>
				<button type='submit'>SEARCH</button>
			</form>
		</div>
	)
}
