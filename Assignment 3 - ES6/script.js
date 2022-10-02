/*************************************************************
 * script.js
 * @author Samer Saber
 * This code's purpose is to implement a tic tac toe game,
 * and a minimax algorithm in order to play against a smart computer.
 * Other files include: index.html, syle.css
 * Last modified on Saturday, 1st of October 2022
 *************************************************************/

let message;//Stores message that will show on page
let user_score;//Keeps track of user score
let ai_score;//Keeps track of AI's score
let turn;//Keeps track of player's turn

const tokens = document.getElementsByTagName("img");
const cells  = document.getElementsByClassName("cell");

const board  = [1,2,3,4,5,6,7,8,9];

window.onload = function() {
    
    message     = document.getElementById("message");
    turn        = 1;
    user_score  = 0;
    ai_score    = 0;

}

/**
 * This function is called from the html file.
 * The purpose of this function is to set the token image
 * to visible on the cell that was clicked by the user.
 * @param {Integer} index The index of the cell
 */
function placeToken(index)
{
    if (turn)
    {
        tokens[index].style.visibility = "visible";
        board[index - 1]               = "r";
        turn                           = 0;
    }
}

/**
 * This function is called from the html file.
 * The purpose of this function is to hide all token
 * images, and reset the game.
 */
function restartGame()
{
    for (var i = 1; i < tokens.length; i++)
    {
        tokens[i].style.visibility = "hidden";
        board[i - 1]               = i;
    }

    message.innerText   = "Let's Play Again!";
    turn                = 1;
}

/**
 * This function is called
 * The purpose of this function is to return a list
 * of empty board cells.
 * @param {List} board The list of board cells
 * @returns {List}     The list of empty board cells
 */
function emptyCells(board)
{
    return board.filter(c => c != "y" && c != "r");
}

