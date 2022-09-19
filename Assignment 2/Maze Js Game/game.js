/*************************************************************
 * game.js
 * @author Samer Saber
 * This code's purpose is to access html elements using DOM only,
 * and write event handling functions to make the html maze interactive.
 * Other files include: game.html, game.css
 * Last modified on Sunday, 18 of September 2022
 *************************************************************/

let message;//Stores messages that will show on the page
let score;//keeps track of the score
let touch;//Keeps track of number of times the boundaries are touched

const boundaries = document.getElementsByClassName("boundary");
const example_boundary = document.getElementsByClassName("boundary example");

window.onload = function() {

    message = document.getElementById("status");
    score   = 0;
    touch   = 0;

    for (var i = 0; i < boundaries.length - 1; i++)
    {
        boundaries[i].onmouseover = touchBoundary;
    }
}

/**
 * This function is called when boundaries are touched, while moving the cursor
 * from start to end.
 */
function touchBoundary() {

    touch++;

    if (touch < 2)
    {
    //Only decreases score if boundaries are touched once
        score -= 10;

    }

    for (var i = 0; i < boundaries.length - 1; i++)
    {
    //Changing color of boundaries to red
        boundaries[i].style.backgroundColor = "#ff8888";
    }

    message.innerText = "You lost! Score: " + score;

}