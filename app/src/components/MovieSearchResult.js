import { useSelector } from 'react-redux';
import MovieCard from './MovieCard';
const MovieSearchResults = ({ query }) => {
	const movies = useSelector((state) => state.movieSearch.results);
	const isLoading = useSelector((state) => state.isLoading);
	return (
		<>
			{movies.length > 0 ? (
				<>
					<h2 className='text-left pl-6 pt-6 font-bold text-2xl'>
						Search Results
					</h2>
					<div className='grid gap-2 p-4 md:grid-cols-2'>
						{movies.map((movie) => (
							<MovieCard key={movie.imdbID} movie={movie} />
						))}
					</div>
				</>
			) : (
				!isLoading && (
					<div className='h-96 flex justify-center items-center'>
						{query === ''
							? 'Search for movies'
							: `Movies not available with '${query}'`}
					</div>
				)
			)}
		</>
	);
};

export default MovieSearchResults;
