import { useState, useEffect, useRef } from 'react'

export default function UseInput() {
	const [query, setQuery] = useState('')
	const [error, setError] = useState(null)
	const isFirstInput = useRef(true)

	const handleChange = (event) => {
		const newQuery = event.target.value
		// Avoid using space a the first space
		if (newQuery.startsWith(' ')) return

		setQuery(event.target.value)
	}

	useEffect(() => {
		// Avoid showing an error if the user didn't write anything
		if (isFirstInput.current) {
			isFirstInput.current = query === ''
			return
		}

		if (query === '') {
			setError(null)
			return
		}

		if (query.length < 3) {
			setError('Use more that 3 characters to make a search.')
			return
		}
		setError(null)
	}, [query])

	return { query, handleChange, error }
}
