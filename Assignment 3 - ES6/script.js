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



window.onload = function() {
    
    message     = document.getElementById("message");
    turn        = 1;
    user_score  = 0;
    ai_score    = 0;

    console.log(message);
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
    //If it's human's turn (turn == 1)
        tokens[index].style.visibility = "visible";
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
    }

    message.innerText   = "Let's Play Again!";
    turn                = 1;
}