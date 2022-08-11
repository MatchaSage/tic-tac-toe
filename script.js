//Selects the valid places to make a move
let move = document.querySelectorAll('.move');
let header = document.querySelector('.header');
let restart = document.querySelector('.restart');

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

    let winHeader = function(player) {
        if (player.id == 1 || player.id == 2) {
            header.textContent = `Player ${player.id} wins!`
        }

        else {
            header.textContent = 'Its a Tie!!';
        }
    }

    let restartGame = function() {
        board.forEach(move => {
            move.textContent = '';
            currentPlayer = player1;
            updateHeader();
        })
    }
    
    let winningMoves = [
        //Vertical wins
        [board[0], board[3], board[6]],
        [board[1], board[4], board[7]],
        [board[2], board[5], board[8]],
        //Horizontal wins
        [board[0], board[1], board[2]],
        [board[3], board[4], board[5]],
        [board[6], board[7], board[8]],
        //Diag wins
        [board[0], board[4], board[8]],
        [board[6], board[4], board[2]]

    ]
    
    return {
        board,
        updateHeader,
        winningMoves,
        winHeader,
        restartGame,
    }
})();

//Where the game is controlled
const game = (() => {
    //Checks for both players and lets the one with true turn make a mark, then toggles the turns to opposite on both
    let validateChoice = function(index) {
        if (player1.turn == true) {
            gameBoard.board[index].textContent = player1.mark;
            player1.turn = false;
            player2.turn = true;
            currentPlayer = player2;
            gameBoard.updateHeader();
            game.checkWin();
        }

        else if(player2.turn == true) {
            gameBoard.board[index].textContent = player2.mark;
            player1.turn = true;
            player2.turn = false;
            currentPlayer = player1;
            gameBoard.updateHeader();
            game.checkWin();
        }
    }

    let checkWin = function() {
        gameBoard.winningMoves.forEach(group =>{
            let p1Win = group.every(element => {
                if (element.textContent == 'X') {
                    //Return player1 wins
                    return true;
                }
            })
            let p2Win = group.every(element => {
                if (element.textContent == 'O') {
                    //Return player2 wins
                    return true;
                }
            })
            let tie = gameBoard.board.every(element => {
                if (element.textContent != '') {
                    //Retunrs a tie because all cells are filled
                    return true;
                }
            })
            
            if (p1Win == true) {
                gameBoard.winHeader(player1);
            }
            else if (p2Win == true) {
                gameBoard.winHeader(player2);
            }
            else if (tie == true) {
                //Sends non player argument to winHeader to trigger tie 
                gameBoard.winHeader('tie');
            }
        })
    }

    return {
        validateChoice,
        checkWin,
    }
})();

//Player factory
function Player(id=1, turn, mark) {
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
        if (move.textContent == '' && !header.textContent.includes('wins')) {
            let index = Array.from(move.parentElement.children).indexOf(move);
            game.validateChoice(index);
        }
    })
})

restart.addEventListener('click', gameBoard.restartGame);

gameBoard.updateHeader();