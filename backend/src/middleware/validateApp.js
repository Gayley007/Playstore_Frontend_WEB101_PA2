import { validateAppData } from '../services/appService.js';

export const validateApp = (req, res, next) => {
  try {
    validateAppData(req.body);
    next();
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};
