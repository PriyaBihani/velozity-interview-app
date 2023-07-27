import { Router } from 'express';
import axios from 'axios';
const router = Router();

router.get('/search', async (req, res) => {
	const { query, page } = req.query;
	console.log('HEY');
	console.log(req.query, req.cookies);
	try {
		const response = await axios.get(
			`http://www.omdbapi.com/?apikey=${
				process.env.API_KEY
			}&s=${encodeURIComponent(query)}&page=${page}`
		);
		const movies = response.data.Search || [];
		res.status(200).json(movies);
	} catch (error) {
		console.error('Error fetching movies:', error.message);
		res.status(500).json({ error: 'Error fetching movies' });
	}
});

let favorites = [];

router.post('/favorites', (req, res) => {
	const { movie } = req.body;

	if (!favorites.find((favMovie) => favMovie.imdbID === movie.imdbID)) {
		favorites.push(movie);
	} else {
		favorites = favorites.filter(
			(favMovie) => favMovie.imdbID !== movie.imdbID
		);
	}
	res.cookie('favorites', JSON.stringify(favorites));
	res.status(200).json({ message: 'Favorites updated successfully' });
});

router.get('/favorites', (req, res) => {
	if (req.cookies.favorites) {
		favorites = req.cookies.favorites;
	}
	res.json(favorites);
});
export default router;
