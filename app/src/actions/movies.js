import axios from 'axios';
import { SEARCH_MOVIES, SET_LOADING, TOGGLE_FAVORITES } from '../constants';

const baseURL = 'http://localhost:8000/api/movies/';

export const searchMovies = (searchTerms) => async (dispatch) => {
	if (searchTerms.trim() === '') return;
	try {
		dispatch({
			type: SET_LOADING,
			payload: true,
		});
		const res = await axios.get(`${baseURL}search?q=${encodeURI(searchTerms)}`);
		dispatch({
			type: SEARCH_MOVIES,
			payload: res.data,
		});
		dispatch({
			type: SET_LOADING,
			payload: false,
		});
	} catch (error) {
		console.log(error);
	}
};

export const toggleFavoriteMovie = (movie) => async (dispatch) => {
	try {
		const res = await axios.post(`${baseURL}/favorites`, {
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
