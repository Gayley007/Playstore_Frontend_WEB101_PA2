const express = require('express');
const dotenv = require('dotenv');
const logger = require('./middleware/logger');
const gameRoutes = require('./routes/gameRoutes');

dotenv.config();
const app = express();

app.use(express.json());
app.use(logger);
app.use('/api', gameRoutes);

module.exports = app;
