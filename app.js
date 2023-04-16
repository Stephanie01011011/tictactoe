let count = 1;

const gameBoard = (() => {
    let board = ["x","x","x",
                 "x","x","x",
                 "x","x","x"];
    let topLeft = document.getElementById("top-left");
    let displayBoard = () => {
        let topLeft = document.getElementById("top-left");
        topLeft.textContent = board[0];
        console.log("hi");
        return topLeft;
         }
    return {
        board, displayBoard
    };
})();

const displayController = (() => {

    return {

    }
})
const Player = () => {

}
