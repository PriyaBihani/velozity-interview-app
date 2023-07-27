import React, { useEffect, useState } from 'react';
import { useDispatch } from 'react-redux';
import { searchMovies } from '../actions/movies';

const SearchBar = ({ currentPage, setCurrentPage }) => {
	const dispatch = useDispatch();
	const [query, setQuery] = useState('');

	const handleChange = (e) => {
		setQuery(e.target.value);
		setCurrentPage(1);
	};

	useEffect(() => {
		const search = setTimeout(() => {
			dispatch(searchMovies(query, currentPage));
		}, 1000);

		return () => clearTimeout(search);
	}, [query, currentPage]);

	return (
		<div className='pt-2 relative text-gray-600 min-w-[40%]'>
			<input
				className='border-2 border-gray-300 bg-white h-10 px-5 rounded-lg text-sm focus:outline-none min-w-full'
				type='search'
				name='search'
				value={query}
				onChange={handleChange}
				placeholder='Search for a movie...'
			/>
		</div>
	);
};

export default SearchBar;
