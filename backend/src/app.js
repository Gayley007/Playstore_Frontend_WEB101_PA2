import express from 'express';
import cors from 'cors';
import morgan from 'morgan';
import dotenv from 'dotenv';
import mongoose from 'mongoose';
import appRoutes from './routes/appRoutes.js';
import { errorHandler } from './utils/errorHandler.js';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(morgan('dev'));

app.use('/api/apps', appRoutes);

app.use(errorHandler);

export default app; 
