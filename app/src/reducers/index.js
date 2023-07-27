import Cookies from 'js-cookie';
import {
	SEARCH_MOVIES,
	SET_LOADING,
	TOGGLE_FAVORITES,
} from '../utils/constants';
const initialState = {
	isLoading: false,
	movieSearch: {
		results: [],
	},
	favorites: JSON.parse(Cookies.get('favorites')) || [],
};

const moviesReducer = (state = initialState, action) => {
	switch (action.type) {
		case SEARCH_MOVIES:
			return {
				...state,
				movieSearch: {
					results: action.payload,
				},
			};
		case SET_LOADING:
			return {
				...state,
				isLoading: action.payload,
			};
		case TOGGLE_FAVORITES:
			const movieIndex = state.favorites.findIndex(
				(movie) => movie.imdbID === action.payload.imdbID
			);
			if (movieIndex !== -1) {
				const updatedFavorites = [...state.favorites];
				updatedFavorites.splice(movieIndex, 1);
				return {
					...state,
					favorites: updatedFavorites,
				};
			} else {
				return {
					...state,
					favorites: [...state.favorites, action.payload],
				};
			}
		default:
			return state;
	}
};

export default moviesReducer;
