const kidsData = {
  recommended: [
    { title: 'LEGO® Friends: Heartlake Rush', rating: 4.2, img: 'recommend1.png' },
    { title: 'CoComelon: Learn ABCs and 123s', rating: 4.3, img: 'recommend2.png' },
    // ...other recommended games...
  ],
  newGames: [
    { title: 'Vlinder Gacha dress up for kids', rating: 4.6, img: 'newgame1.png' },
    { title: 'strawberry shortcake Bake shop', rating: 4.4, img: 'newgame2.png' },
    // ...other new games...
  ],
  simulationGames: [
    { title: 'Miga Town: My world', rating: 4.1, img: 'simulation1.png' },
    { title: 'Vlogger Go Viral: Tuber life', rating: 4.5, img: 'simulation2.png' },
    // ...other simulation games...
  ],
};

const getRecommended = () => kidsData.recommended;
const getNewGames = () => kidsData.newGames;
const getSimulationGames = () => kidsData.simulationGames;

export default { getRecommended, getNewGames, getSimulationGames };
