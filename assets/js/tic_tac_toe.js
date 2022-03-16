let board = [ ['', '', ''], 
              ['', '', ''], 
              ['', '', ''] ];

let counter = 0;

function checkWinner(board){
 
      let rowWinner = checkRowWin(board); 
      let columnWinner = checkColumnWin(board); 
      let diagonalWinner = checkDiagonalWin(board); 
  
      if(rowWinner == 'x' || rowWinner == 'o'){
          return rowWinner;
      }

      if(columnWinner == 'x' || columnWinner == 'o'){
        return columnWinner;
    }

    if(diagonalWinner == 'x' || diagonalWinner == 'o'){
        return diagonalWinner;
    }


     //check if board is full 
     if(boardIsFull(board)){
         
        // 0 is draw
       return 0;
     }
   //if not full retunr -1 to continue playing
   return -1;


}


function checkRowWin(boardRow){
   
    //row 1
    if(boardRow[0][0] == boardRow[0][1] && boardRow[0][1] == boardRow[0][2]){
        //winner is the boardRow player
        //ex. if boardRow[0] is X then winner is player X 
        return boardRow[0][0];
    }

      //row 2
    if(boardRow[1][0] == boardRow[1][1] && boardRow[1][1] == boardRow[1][2]){
        //winner is the boardRow player
        //ex. if boardRow[3] is X then winner is player X 
        return boardRow[1][0];
    }

  //row 3
    if(boardRow[2][0] == boardRow[2][1] && boardRow[2][1] == boardRow[2][2]){
        //winner is the boardRow player
        //ex. if boardRow[6] is X then winner is player X 
        return boardRow[2][0];
    }
    
    return -999;
}





function checkColumnWin(boardColumn){
   
    //col 1
    if(boardColumn[0][0] == boardColumn[1][0] && boardColumn[1][0] == boardColumn[2][0]){
        //winner is the boardColumn player
        //ex. if boardColumn[0] is X then winner is player X 
        return boardColumn[0][0];
    }

      //col 2
      if(boardColumn[0][1] == boardColumn[1][1] && boardColumn[1][1] == boardColumn[2][1]){
        //winner is the boardColumn player
        //ex. if boardColumn[0] is X then winner is player X 
        return boardColumn[0][1];
    }

  //col 3
  if(boardColumn[0][2] == boardColumn[1][2] && boardColumn[1][2] == boardColumn[2][2]){
    //winner is the boardColumn player
    //ex. if boardColumn[0] is X then winner is player X 
    return boardColumn[0][2];
}

    return -999;
}





function checkDiagonalWin(boardDiagonal){
  
    //diagonal 1
    if(boardDiagonal[0][0] == boardDiagonal[1][1] && boardDiagonal[1][1] == boardDiagonal[2][2]){
        //winner is the boardDiagonal player
        //ex. if boardDiagonal[0] is X then winner is player X 
        return boardDiagonal[0][0];
    }

      //diagonal 2
    if(boardDiagonal[0][2] == boardDiagonal[1][1] && boardDiagonal[1][1] == boardDiagonal[2][0]){
        //winner is the boardDiagonal player
        //ex. if boardDiagonal[1] is X then winner is player X 
        return boardDiagonal[0][2];
    }

  


    return -999;

}


function boardIsFull(board){
  

    for(let i = 0; i < 3; i++){
        for(let j = 0; j < 3; j++){
            console.log(board[i][j]);
            if(board[i][j] == '0'){
                return false;
            }
        }
    }

    return true;
}

function changeElementClass(id){
    let oldClass = document.getElementById(id).className;
    let newClass = "";
    if(counter % 2 == 0){
        newClass = oldClass + " x";
    }else if(counter % 2 == 1){
      
        newClass = oldClass + " o";
    }

    document.getElementById(id).setAttribute("class", newClass);
}



function setValue(id){
    
   console.log(counter);
   changeElementClass(id);
   
    for(let i = 0; i < 3; i ++){
        for(let j = 0; j < 3; j++){
      
              
            
         
              
               if(id == i * 3 + j){
                if(counter % 2 == 0){
                    board[i][j] = "x";
                }else if(counter % 2 == 1){
                  
                    board[i][j] = "o";
                }
                counter++;
               }else if(board[i][j] != "o" && board[i][j] != "x"){
                
                board[i][j] = '0'; 
               }


           
        }
    }



    const result = checkWinner(board);
    if(result == 0){
        //game draw
        document.getElementById("winner_is").innerHTML = "Game draw!";
    }else if(result != -1){
        //we have a winner
        document.getElementById("winner_is").innerHTML = "Winner is: " + result;
    }

   
}



function reset(){
    /* for(let  k = 0; k < 8; k++){
         let oldClass =  document.getElementById(k).className;
         if(oldClass.length <= 2){
             document.getElementById(k).classList.remove(oldClass);
         }else{
             let newClass = oldClass.slice(0, -1);
             document.getElementById(k).setAttribute("class", newClass);
         }
         

         for(let i = 0; i < 3; i ++){
            for(let j = 0; j < 3; j++){
             board[i][j] = '';
    
               
            }
        }
    
     }*/

     location.reload();
}


