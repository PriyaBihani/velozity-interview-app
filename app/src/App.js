import SearchBar from './components/SearchBar';
import Loader from './components/Loader';
import './App.css';
import MovieSearchResults from './components/MovieSearchResult';
import { useState } from 'react';

function App() {
	const [currentPage, setCurrentPage] = useState(1);
	const handlePageChange = (pageNumber) => {
		setCurrentPage(pageNumber);
	};
	return (
		<div className='App'>
			<nav className='bg-slate-600'>
				<div className='flex flex-wrap items-center justify-between p-4'>
					<h1 className='text-white font-bold text-3xl'>Movie Search App</h1>
					<SearchBar currentPage={currentPage} />
				</div>
			</nav>
			<Loader />
			<MovieSearchResults
				currentPage={currentPage}
				onPageChange={handlePageChange}
			/>
		</div>
	);
}

export default App;
