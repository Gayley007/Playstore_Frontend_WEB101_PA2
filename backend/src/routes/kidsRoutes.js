import express from 'express';
import { getRecommended, getNewGames, getSimulationGames } from '../controllers/kidsController.js';

const router = express.Router();

router.get('/recommended', getRecommended);
router.get('/new-games', getNewGames);
router.get('/simulation-games', getSimulationGames);

export default router;
