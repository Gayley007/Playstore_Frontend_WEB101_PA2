const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Game = sequelize.define('Game', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  title: DataTypes.STRING,
  description: DataTypes.TEXT,
  category: DataTypes.STRING,
  rating: DataTypes.FLOAT,
  imageUrl: DataTypes.STRING,
}, {
  tableName: 'games',
  timestamps: false,
});

module.exports = Game;
