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

const game = (() => {
    return {}
})();


//Player factory
function Player(id, turn) {
    id = id
    turn = turn
    return {
        id,
        turn
    }
}

function displayBoard(move) {
}

move.forEach(move => {
    move.addEventListener('click', function() {
        console.log(this.textContent)
        console.log(move);
        if (move.textContent == 'X') {
            move.textContent = 'O';
        }

        else {
            move.textContent = 'X';
        }
    })
})

let player1 = Player(1);
let player2 = Player(2);
displayBoard(1);