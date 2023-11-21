import { useState, useEffect, useRef } from 'react'

export default function UseInput() {
	const [query, setQuery] = useState('')
	const [error, setError] = useState(null)
	const [sorted, setSorted] = useState(false)
	const isFirstInput = useRef(true)

	const handleSorted = () => {
		setSorted(!sorted)
	}

	const handleChange = (event) => {
		const newQuery = event.target.value
		// Avoid using space a the first space
		if (newQuery.startsWith(' ')) return

		setQuery(newQuery)
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

		if (query.length < 4) {
			setError('Use more that 3 characters to make a search.')
			return
		}
		setError(null)
	}, [query])

	return { query, handleChange, error, sorted, handleSorted }
}
