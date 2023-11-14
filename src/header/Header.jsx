import './Header.css'

export default function Header() {
	return (
		<div className='header'>
			<h1>Movies Search</h1>
			<form>
				<input type='text' placeholder='Avengers, Star Wars...' />
				<button type='submit'>SEARCH</button>
			</form>
		</div>
	)
}
