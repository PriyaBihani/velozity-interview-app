import { useState } from 'react';
import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import './App.css';
import MovieSearchResults from './components/MovieSearchResult';

function App() {
	const [query, setQuery] = useState('');

	return (
		<div className='App'>
			<nav className='bg-slate-600'>
				<div className='flex flex-wrap items-center justify-between p-4'>
					<h1 className='text-white font-bold text-3xl'>Movie Search App</h1>
					<SearchBar query={query} setQuery={setQuery} />
				</div>
			</nav>
			<Loader />
			<MovieSearchResults query={query} />
		</div>
	);
}

export default App;
