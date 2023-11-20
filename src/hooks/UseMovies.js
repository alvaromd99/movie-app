import { useState } from 'react'
import { searchMovies } from '../services/movies'
import { useRef } from 'react'

export function UseMovies({ query }) {
	const [responseMovies, setResponseMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const previousSearch = useRef(query)

	const getMovies = async () => {
		// Avoid searching the movies again if query didn`t change
		if (query === previousSearch.current) return

		try {
			setLoading(true)
			setError(null)
			previousSearch.current = query
			const newMovies = await searchMovies({ query })
			setResponseMovies(newMovies)
		} catch (error) {
			setError(error.message)
		} finally {
			setLoading(false)
		}
	}

	return { responseMovies, loading, error, getMovies }
}
