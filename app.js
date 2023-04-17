
const gameBoard = (() => {
    let board = ["","","",
                 "","","",
                 "","",""];
    
    

    return {
        board
    };
})();

const displayController = (() => {
    let mark = "O";
    let winner = false;
    
    //Push mark to array for display   
    let getMark = () => {
        if(winner == true){
            clearBoard();
        }
      let player = document.getElementById("player");
          if (mark == "X"){
            
            mark = "O";
            player.textContent = player1.name + ", make your move";
            
        } else {
            mark = "X";
            player.textContent = player2.name + ", make your move";
            
        }

        if(event.target.className == "0"){
            gameBoard.board[0] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "1"){
            gameBoard.board[1] = mark;
            displayBoard();
            checkForWinner();
        }else if(event.target.className == "2"){
            gameBoard.board[2] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "3"){
            gameBoard.board[3] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "4"){
            gameBoard.board[4] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "5"){
            gameBoard.board[5] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "6"){
            gameBoard.board[6] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "7"){
            gameBoard.board[7] = mark;
            displayBoard();
            checkForWinner();
        } else if(event.target.className == "8"){
            gameBoard.board[8] = mark;
            displayBoard();
            checkForWinner();
        }

       
       
        //check for a winner after each move
        function checkForWinner(){
            
            if(gameBoard.board[0] == gameBoard.board[1] && gameBoard.board[1]== gameBoard.board[2] ){
                if (gameBoard.board[0] != ""){
                    alert("There is a winner");
                    winner = true;
                }
                
            } else if(gameBoard.board[3] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[5] ){
                if (gameBoard.board[3] != ""){
                    alert("There is a winner");
                    winner = true;
                }
            } else if(gameBoard.board[6] == gameBoard.board[7] && gameBoard.board[7]== gameBoard.board[8] ){
                if (gameBoard.board[6] != ""){
                    alert("There is a winner");
                    winner = true;
                }
            } else if(gameBoard.board[0] == gameBoard.board[3] && gameBoard.board[3]== gameBoard.board[6] ){
                if (gameBoard.board[0] != ""){
                    alert("There is a winner");
                    winner = true;
                }
            } else if(gameBoard.board[1] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[7] ){
                if (gameBoard.board[1] != ""){
                    alert("There is a winner");
                    winner = true;
                }
            } else if(gameBoard.board[2] == gameBoard.board[5] && gameBoard.board[5]== gameBoard.board[8] ){
                if (gameBoard.board[2] != ""){
                    alert("There is a winner");
                    winner = true;
                }
            } else if(gameBoard.board[0] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[8] ){
                if (gameBoard.board[0] != ""){
                    alert("There is a winner");
                    winner = true;
                }
            } else if(gameBoard.board[2] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[6] ){
                if (gameBoard.board[2] != ""){
                    alert("There is a winner");
                    if(mark == "X"){
                        player.textContent = player1.name + " is the winner!";
                    } else {
                        player.textContent = player2.name + " is the winner!";
                    }
                    winner = true;
                }
            }
        }
        function clearBoard() {
            gameBoard.board = ["","","","","","","","",""];
            winner = false;
            mark = "O";
            player.textContent = player1.name + ", make your move";
            displayBoard();
        }



  
   }
   
    
       //Display the gameboard everytime a user places a mark
    let displayBoard = () => {
        
        let topLeft = document.getElementById("top-left");
        let topCenter = document.getElementById("top-center");
        let topRight = document.getElementById("top-right");
        let centerLeft = document.getElementById("center-left");
        let centerCenter = document.getElementById("center-center");
        let centerRight = document.getElementById("center-right");
        let bottomLeft = document.getElementById("bottom-left");
        let bottomCenter = document.getElementById("bottom-center");
        let bottomRight = document.getElementById("bottom-right");
        topLeft.textContent = gameBoard.board[0];
        topCenter.textContent = gameBoard.board[1];
        topRight.textContent = gameBoard.board[2];
        centerLeft.textContent = gameBoard.board[3];
        centerCenter.textContent = gameBoard.board[4];
        centerRight.textContent = gameBoard.board[5];
        bottomLeft.textContent = gameBoard.board[6];
        bottomCenter.textContent = gameBoard.board[7];
        bottomRight.textContent = gameBoard.board[8];
        
         }


 
    return {
        getMark, displayBoard
    };
})();

const Player = (name, mark) => {
    return {
        name, mark
    };
}

const player1 = Player("Stephanie", "X");
const player2 = Player("Alexander", "O");



