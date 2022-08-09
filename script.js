//Selects the valid places to make a move
let move = document.querySelectorAll('.move .move');

//Module for the gameboard
const gameBoard = (() => {
    const board = [
        move[0], move[1], move[2],
        move[3], move[4], move[5],
        move[6], move[7], move[8]
    ];
    return {board}
})();

const gameFlow = (() => {
    return {}
})();


//Player factory
function player() {

    return {}
}