import axios from 'axios';

console.log(process.env.REACT_APP_BASE_URL);

const instance = axios.create({
	baseURL: process.env.REACT_APP_BASE_URL,
	withCredentials: true,
});

instance.interceptors.response.use(
	(response) => {
		console.log('Response received:', response);
		return response.data;
	},
	(error) => {
		console.error('Response error:', error);
		return Promise.reject(error);
	}
);

export default instance;
