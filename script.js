//Selects the valid places to make a move
let move = document.querySelectorAll('.move');
let header = document.querySelector('.header');

let player1 = Player(1,true,'X');
let player2 = Player(2,false,'O');
let currentPlayer = player1;

//Module for the gameboard
const gameBoard = (() => {
    const board = [
        move[0], move[1], move[2],
        move[3], move[4], move[5],
        move[6], move[7], move[8]
    ];
    let updateHeader = function() {
        header.textContent = `Player ${currentPlayer.id}'s Turn`;
    }
    return {
        board,
        updateHeader,
    }
})();

//Where the game is controlled
const game = (() => {

    let validateChoice = function(index) {
        if (player1.turn == true) {
            gameBoard.board[index].textContent = player1.mark;
            player1.turn = false;
            player2.turn = true;
            currentPlayer = player2;
            gameBoard.updateHeader();
        }
        else if(player2.turn == true) {
            gameBoard.board[index].textContent = player2.mark;
            player1.turn = true;
            player2.turn = false;
            currentPlayer = player1;
            gameBoard.updateHeader();
        }
    }
    return {
        validateChoice,
    }
})();

//Player factory
function Player(id, turn, mark) {
    return {
        id,
        turn,
        mark,
        changeTurn(player){
            //Sets player turn to oppsite of current
            player.turn = !player.turn;
            console.log(player)
        }
    }
}

move.forEach(move => {
    move.addEventListener('click', function() {
        if (move.textContent == '') {
            let index = Array.from(move.parentElement.children).indexOf(move);
            game.validateChoice(index);
        }
    })
})

gameBoard.updateHeader();