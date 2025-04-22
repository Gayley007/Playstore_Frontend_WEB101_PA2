import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import kidsRoutes from './routes/kidsRoutes.js';

dotenv.config(); // Load environment variables

const app = express();

// Middleware
app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

// Routes
app.use('/api/kids', kidsRoutes);

app.get('/', (_req, res) => {
  res.json({ message: 'API is running' });
});

