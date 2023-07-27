import { useDispatch, useSelector } from 'react-redux';
import { toggleFavoriteMovie } from '../actions/movies';

const MovieCard = ({ movie }) => {
	const dispatch = useDispatch();
	const favorites = useSelector((state) => state.favorites);
	const toggleFav = (movie) => {
		dispatch(toggleFavoriteMovie(movie));
	};
	const isFav = (movie) => {
		const movieIndex = favorites.findIndex(
			(item) => item.imdbID === movie.imdbID
		);
		return movieIndex === -1 ? false : true;
	};
	return (
		<div className='bg-gray-100 py-6 flex flex-col justify-center sm:py-12'>
			<div className='py-3 sm:max-w-xl sm:mx-auto'>
				<div className='bg-white shadow-lg border-gray-100 max-h-80	 border sm:rounded-3xl p-8 flex space-x-8'>
					<div className='h-48 overflow-visible w-1/2'>
						<img className='rounded-3xl shadow-lg' src={movie.Poster} alt='' />
					</div>
					<div className='flex flex-col w-1/2 space-y-4'>
						<div className='flex justify-between items-start'>
							<h2 className='text-3xl font-bold'>
								{movie.Title?.substring(0, 30)}
							</h2>
							<div className='bg-yellow-400 font-bold rounded-xl p-2'>7.2</div>
						</div>
						<div>
							<div className='text-sm text-gray-400'>
								{movie.Type.toUpperCase()}
							</div>
							<div className='text-lg text-gray-800'>{movie.Year}</div>
						</div>
						<button onClick={() => toggleFav(movie)}>
							<svg
								id='heart'
								xmlns='http://www.w3.org/2000/svg'
								viewBox='0 0 24 24'
								width='24'
								height='24'>
								{isFav(movie) ? (
									<path
										id='heart-filled'
										d='M18.39 2c-2.33 0-4.66 1.28-5.62 2.73C11.53 3.28 9.2 2 6.77 2 4.42 2 2 4.42 2 7.77c0 3.45 2.53 6.58 8.55 12.26L12 21.35l1.45-1.32C19.47 14.35 22 11.22 22 7.77c0-3.45-2.42-5.77-5.61-5.77z'
										fill='red'
									/>
								) : (
									<path
										id='heart'
										d='M12 21.35l-1.45-1.32C4.53 14.35 2 11.22 2 7.77 2 4.42 4.42 2 7.77 2c2.34 0 4.47 1.28 5.23 3.33C13.73 3.28 16.06 2 18.39 2 21.58 2 24 4.42 24 7.77c0 3.45-2.53 6.58-8.55 12.26L12 21.35z'
										fill='#ccc'
									/>
								)}
							</svg>
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

export default MovieCard;
