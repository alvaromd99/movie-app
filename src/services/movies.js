import { API_KEY as key } from '../api-key'

export const searchMovies = async ({ query }) => {
	if (query === '') return
	console.log('Fetching.......................')
	try {
		const response = await fetch(
			`https://www.omdbapi.com/?apikey=${key}&s=${query}`
		)
		if (!response.ok) {
			throw new Error('Error fetching data')
		}
		const data = await response.json()

		const movies = data.Search
		// Avoid using apis names
		return movies?.map((m) => ({
			title: m.Title,
			year: m.Year,
			id: m.imdbID,
			type: m.Type,
			poster: m.Poster,
		}))
	} catch (error) {
		console.error(error)
	}
}
