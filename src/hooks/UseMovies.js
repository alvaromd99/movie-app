import { useState } from 'react'
import { searchMovies } from '../services/movies'

export function UseMovies({ query }) {
	const [responseMovies, setResponseMovies] = useState([])
	const [loading, setLoading] = useState(false)

	const getMovies = async () => {
		setLoading(true)
		const newMovies = await searchMovies({ query })
		setLoading(false)
		setResponseMovies(newMovies)
	}
	return { responseMovies, loading, getMovies }
}
