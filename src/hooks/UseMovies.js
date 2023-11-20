import { useState } from 'react'
import { searchMovies } from '../services/movies'
import { useRef, useMemo, useCallback } from 'react'

export function UseMovies({ query, sorted }) {
	const [responseMovies, setResponseMovies] = useState([])
	const [loading, setLoading] = useState(false)
	const [error, setError] = useState(null)
	const previousSearch = useRef(query)

	// Pass the query by params and use callback to avoid creating the function more than one time
	const getMovies = useCallback(async ({ query }) => {
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
	}, [])

	const sortedMovies = useMemo(() => {
		return sorted
			? [...responseMovies].sort((a, b) => a.title.localeCompare(b.title))
			: responseMovies
	}, [responseMovies, sorted])

	return { movies: sortedMovies, loading, error, getMovies }
}
