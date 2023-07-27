import axiosInstance from '../utils/axios';
import { SEARCH_MOVIES, TOGGLE_FAVORITES } from '../utils/constants';
import { setLoader } from '../utils/loader';

export const searchMovies =
	(searchTerms, page = 1) =>
	async (dispatch) => {
		if (searchTerms.trim() === '') return;
		try {
			setLoader(true, dispatch);
			const res = await axiosInstance.get(
				`search?query=${encodeURI(searchTerms)}&page=${page}`
			);
			dispatch({
				type: SEARCH_MOVIES,
				payload: res,
			});
			setLoader(false, dispatch);
		} catch (error) {
			console.log(error);
		}
	};

export const toggleFavoriteMovie = (movie) => async (dispatch) => {
	try {
		const res = await axiosInstance.post(`favorites`, {
			movie,
		});

		dispatch({
			type: TOGGLE_FAVORITES,
			payload: {
				...movie,
			},
		});
	} catch (error) {
		console.log(error);
	}
};
