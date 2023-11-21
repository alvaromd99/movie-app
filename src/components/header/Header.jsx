import './Header.css'
import MovieIcon from '../../icons/MovieIcon'
import { useState } from 'react'
import { useCallback } from 'react'
import debounce from 'just-debounce-it'

export default function Header({
	query,
	handleChange,
	getMovies,
	error,
	sorted,
	handleSorted,
}) {
	const [isFocused, setIsFocused] = useState(false)

	// eslint-disable-next-line react-hooks/exhaustive-deps
	const debounceGetMovies = useCallback(
		debounce((query) => {
			console.log('query: ' + query)
			getMovies({ query })
		}, 500),
		[]
	)

	const handleFocus = () => {
		setIsFocused(true)
	}

	const handleBlur = () => {
		setIsFocused(false)
	}

	const handleSubmit = (event) => {
		event.preventDefault()
		getMovies({ query })
	}

	const handleInputChange = (event) => {
		const newQuery = event.target.value
		handleChange(event)
		debounceGetMovies(newQuery)
	}

	return (
		<div className='header'>
			<div className='title'>
				<MovieIcon />
				<h1>Movies Search</h1>
			</div>
			<div>
				<form onSubmit={handleSubmit} className='form' id='search'>
					<div
						className={`input-bg ${error ? 'wrong' : ''} ${
							isFocused ? 'focus' : ''
						}`}>
						<input
							value={query}
							onChange={handleInputChange}
							onFocus={handleFocus}
							onBlur={handleBlur}
							type='text'
							name='movieQuery'
							placeholder='Avengers, Star Wars...'
							autoComplete='off'
						/>
					</div>
					<input
						type='checkbox'
						name='sort-check'
						onChange={handleSorted}
						checked={sorted}
					/>
					<button type='submit'>SEARCH</button>
				</form>
				{error && <p className='error-msg'>{`* ${error}`}</p>}
			</div>
		</div>
	)
}
