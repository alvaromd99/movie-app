import './App.css'
import Header from './components/header/Header'
import Movies from './components/movies/Movies'
import UseInput from './hooks/UseInput'

function App() {
	const { query, handleChange } = UseInput()

	return (
		<div className='App'>
			<Header query={query} handleChange={handleChange} />
			<Movies />
		</div>
	)
}

export default App
