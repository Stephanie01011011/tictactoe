let count = 1;

const gameBoard = (() => {
    let board = ["","","",
                 "","","",
                 "","",""];
    
    return {
        board
    };
})();

const displayController = (() => {
    
    //Display the gameboard everytime a user places a mark
    let displayBoard = () => {
        let topLeft = document.getElementById("top-left");
        topLeft.textContent = gameBoard.board[0];
        let topCenter = document.getElementById("top-center");
        topCenter.textContent = gameBoard.board[1];
        let topRight = document.getElementById("top-right");
        topRight.textContent = gameBoard.board[2];
        let centerLeft = document.getElementById("center-left");
        centerLeft.textContent = gameBoard.board[3];
        let centerCenter = document.getElementById("center-center");
        centerCenter.textContent = gameBoard.board[4];
        let centerRight = document.getElementById("center-right");
        centerRight.textContent = gameBoard.board[5];
        let bottomLeft = document.getElementById("bottom-left");
        bottomLeft.textContent = gameBoard.board[6];
        let bottomCenter = document.getElementById("bottom-center");
        bottomCenter.textContent = gameBoard.board[7];
        let bottomRight = document.getElementById("bottom-right");
        bottomRight.textContent = gameBoard.board[8];
         }
    return {
        displayBoard
    };
})();

const Player = () => {

}
