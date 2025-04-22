import kidsService from '../services/kidsService.js';

export const getRecommended = (_req, res) => {
  const data = kidsService.getRecommended();
  res.json(data);
};

export const getNewGames = (_req, res) => {
  const data = kidsService.getNewGames();
  res.json(data);
};

export const getSimulationGames = (_req, res) => {
  const data = kidsService.getSimulationGames();
  res.json(data);
};
