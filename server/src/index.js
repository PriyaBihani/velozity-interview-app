import dotenv from 'dotenv';
dotenv.config('../.env');

import express from 'express';
import cors from 'cors';
import cookieParser from 'cookie-parser';
import movieRoutes from './routes/movies';
const app = express();

const corsOptions = {
	origin: process.env.ORIGIN,
	optionsSuccessStatus: 200,
	credentials: true,
};

app.use(cors(corsOptions));
app.use(cookieParser());
app.use(express.json());
app.use('/api/movies', movieRoutes);

const PORT = process.env.PORT || 8000;

app.listen(PORT, () => {
	console.log(`Server is running on port ${PORT}`);
});
