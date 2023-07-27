import { SET_LOADING } from './constants';

export const setLoader = (payload, dispatch) => {
	dispatch({
		type: SET_LOADING,
		payload: payload,
	});
};
