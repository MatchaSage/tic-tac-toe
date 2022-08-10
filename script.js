//Selects the valid places to make a move
let move = document.querySelectorAll('.move');

//Module for the gameboard
const gameBoard = (() => {
    const board = [
        move[0], move[1], move[2],
        move[3], move[4], move[5],
        move[6], move[7], move[8]
    ];
    return {board}
})();

//Where game is displayed
const displayGame = (() => {
    const {board} = gameBoard;
    
    return{}
})();

//Where the game is controlled
const game = (() => {
    return {
        
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
        },
        //MAYBE PUT EVENT LISTENER HERE I DUNNO
    }
}

move.forEach(move => {
    move.addEventListener('click', function() {
        //Stores index of clicked element in variable
        let index = Array.from(move.parentElement.children).indexOf(move);
    });
})
let player1 = Player(1,true,'X');
let player2 = Player(2,false,'O');