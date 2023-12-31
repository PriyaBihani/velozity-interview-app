import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';
import moviesReducer from './reducers';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
	moviesReducer,
	composeWithDevTools(applyMiddleware(thunk))
);

export default store;
