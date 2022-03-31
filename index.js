const HotPotatoService = require('./services/hotPotatoService');

const playersList = ['Ana', 'Carlos', 'Joao', 'Maria', 'Mario'];
const numberToEliminate = 7;
const resultGameHotPotato = HotPotatoService.getPotatoResult(playersList,numberToEliminate);

resultGameHotPotato.eliminates.forEach(eliminate => {
    console.log(`${eliminate} was eliminated.`);
});

console.log(`${resultGameHotPotato.winner} wins!`);

