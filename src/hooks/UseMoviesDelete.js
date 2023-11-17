import data from '../mocks/data.json'

export function UseMoviesDelete() {
	const movies = data.Search

	// Avoid using apis names
	const mappedMovies = movies?.map((m) => ({
		title: m.Title,
		year: m.Year,
		id: m.imdbID,
		type: m.Type,
		poster: m.Poster,
	}))

	return { movies: mappedMovies }
}
