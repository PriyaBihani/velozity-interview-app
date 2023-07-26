import express from 'express';
import cors from 'cors';
import cookieparser from 'cookie-parser';
import movieRoutes from './routes/movies';
const app = express();

app.use(cors());
app.use(express.json());
app.use(cookieparser());
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
