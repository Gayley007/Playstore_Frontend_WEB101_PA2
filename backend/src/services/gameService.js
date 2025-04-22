const Game = require('../models/Game');

exports.fetchAllGames = async () => {
  return await Game.findAll();
};
