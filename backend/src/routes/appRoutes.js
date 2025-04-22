import express from 'express';
import { getAllApps, createApp, updateApp, deleteApp } from '../controllers/appController.js';

const router = express.Router();

router.get('/', getAllApps);
router.post('/', createApp);
router.put('/:id', updateApp);
router.delete('/:id', deleteApp);

export default router;
