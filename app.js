


//Game board module
const gameBoard = (() => {
    let board = ["","","",
                 "","","",
                 "","",""];
    

    return {
        board
    };
})();



//Controls the game play module
const displayController = (() => {
    let mark = "O";
    let winner = false;
    let play = "y";
    let newRound = false;
  
   
    let name1 = prompt("Player 1 enter your name:", "Player 1");
    let name2 = prompt("Player 2 enter your name:", "Player 2");
    
    

    window.onload = function(){
        let player = document.getElementById("player");
        player.textContent = name1 + ", make your move";
    }
    
       
        
     
    

    
   
    //Push mark to array for display   
    let getMark = () => {
        
            let player = document.getElementById("player");
            
                if (mark == "X"){
                
                    mark = "O";
                    player.textContent = name1 + ", make your move";
                    
                } else {
                    mark = "X";
                    player.textContent = name2 + ", make your move";
                    
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
        
       
        
            if(winner == true){
                clearBoard();
            }

       
       
       
        //check for a winner after each move
        function checkForWinner(){
            
            if(gameBoard.board[0] == gameBoard.board[1] && gameBoard.board[1]== gameBoard.board[2] ){
                if (gameBoard.board[0] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
                
            } else if(gameBoard.board[3] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[5] ){
                if (gameBoard.board[3] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
            } else if(gameBoard.board[6] == gameBoard.board[7] && gameBoard.board[7]== gameBoard.board[8] ){
                if (gameBoard.board[6] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
            } else if(gameBoard.board[0] == gameBoard.board[3] && gameBoard.board[3]== gameBoard.board[6] ){
                if (gameBoard.board[0] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
            } else if(gameBoard.board[1] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[7] ){
                if (gameBoard.board[1] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
            } else if(gameBoard.board[2] == gameBoard.board[5] && gameBoard.board[5]== gameBoard.board[8] ){
                if (gameBoard.board[2] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                   
                }
            } else if(gameBoard.board[0] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[8] ){
                if (gameBoard.board[0] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
            } else if(gameBoard.board[2] == gameBoard.board[4] && gameBoard.board[4]== gameBoard.board[6] ){
                if (gameBoard.board[2] != ""){
                    alertWinner();
                    playAgain();
                    winner = true;
                    
                }
            }
        }

        function alertWinner(){
            
                    if(mark == "X"){
                        clearBoard();
                        player.textContent = name1 + " is the winner!";
                    } else {
                        clearBoard();
                        player.textContent = name2 + " is the winner!";
                    }

        }
        function clearBoard() {
            gameBoard.board = ["","","","","","","","",""];
            winner = false;
            mark = "O";
            
            displayBoard();
        }

        function playAgain(){
            let play = prompt("Would you like to play again?", "'Y' or 'N'")
            play.toLowerCase();
            if(play == "y"){
                clearBoard();
                mark = "O";
                getMark();
            } else {
                clearBoard();
            }
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

const Player = (name) => {
    return {
        name
    };
}





