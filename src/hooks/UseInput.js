import { useState } from 'react'

export default function UseInput() {
	const [query, setQuery] = useState('')

	const handleChange = (event) => {
		const newQuery = event.target.value
		// Avoid using space a the first space
		if (newQuery.startsWith(' ')) return

		setQuery(event.target.value)
	}

	return { query, handleChange }
}
