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

const board  = [1,2,3,4,5,6,7,8,9];//Keeps track of board cells

const tokens = document.getElementsByTagName("img");
const cells  = document.getElementsByClassName("cell");

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
 * This function is called inside 'minimax()'.
 * The purpose of this function is to return a list
 * of empty board cells.
 * @param   {List} board The list of board cells
 * @returns {List}     The list of empty board cells
 */
function emptyCells(board)
{
    return board.filter(c => c != "y" && c != "r");
}

/**
 * This function is called inside 'minimax()'.
 * The purpose of this function is to determine
 * if the player passed in the parameter has won
 * the game or not, by checking all winning combinations.
 * @param   {List}   board  The list of board cells
 * @param   {String} player 'y' for AI or 'r' for human
 * @returns {boolean}       True if won, false otherwise
 */
function hasWon(board, player)
{
    if ((board[0] == player && board[1] == player && board[2] == player) ||
        (board[3] == player && board[4] == player && board[5] == player) ||
        (board[6] == player && board[7] == player && board[8] == player) ||
        (board[0] == player && board[3] == player && board[6] == player) ||
        (board[1] == player && board[4] == player && board[7] == player) ||
        (board[2] == player && board[5] == player && board[8] == player) ||
        (board[0] == player && board[4] == player && board[8] == player) ||
        (board[2] == player && board[4] == player && board[6] == player))
    {
        return true;
    }
    else
    {
        return false;
    }
}


function minimax(new_board, player)
{
    const empty_cells = emptyCells(new_board);

    if (hasWon(new_board, "r"))
    {
    //If human wins
        return -10;
    }
    else if (hasWon(new_board, "y"))
    {
    //If AI wins
        return 10;
    }
    else if (empty_cells.length === 0)
    {
    //If there's a tie
        return 0;
    }
}