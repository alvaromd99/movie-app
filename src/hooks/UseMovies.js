import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function UseMovies({ query }) {
	const [responseMovies, setResponseMovies] = useState([])

	const getMovies = async () => {
		const newMovies = await searchMovies({ query })
		setResponseMovies(newMovies)
	}
	return { responseMovies, getMovies }
}
