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
let touch;//Keeps track of number of times the boundaries or end button are touched
let start;//holds 'start' element in html file
let end;//holds 'end' element in html file
let started;//Assigned '1' if the game started

const boundaries = document.getElementsByClassName("boundary");
const example_boundary = document.getElementsByClassName("boundary example");

window.onload = function() {

    message = document.getElementById("status");
    start   = document.getElementById("start");
    end     = document.getElementById("end");
    score   = 0;
    touch   = 0;
    started = 0;

    //start.addEventListener("mouseover", touchBoundary);

    start.onmouseover = touchStart;
    end.onmouseover = won;

    for (var i = 0; i < boundaries.length - 1; i++)
    {
        boundaries[i].onmouseover = lost;
    }    
}


/**
 * This function is called when the 'start' button is touched.
 * The purpose of this function is to reset the number of boundary
 * touches to 0, and set 'started' to 1.
 */
function touchStart() {
    
    started = 1;//Game started
    touch   = 0;
}

/**
 * This function is called when boundaries are touched, while moving the cursor
 * from start to end.
 * The purpose of this function is to decrease the score by 10 and output it
 * for the user, if the game started and a boundary has been touched.
 */
function lost() {
    
    if ( started > 0 && touch < 1)
    {
    //Only decreases score if boundaries are touched once per session
        touch++;
        score -= 10;
        
        for (var i = 0; i < boundaries.length - 1; i++)
        {
            boundaries[i].style.backgroundColor = "#ff8888";
        }
        
        message.innerText = "You lost! Score: " + score;
    }
    
}

/**
 * This function is called when the end button is touched after touching
 * the start, without touching any wall.
 * The purpose of this function is to increase the score by 5 and output it
 * for the user, if the game started and no boundary has been touched.
 */
 function won() {
    
    if (started > 0 && touch < 1)
    {
    //If the game started and no boundary is touched yet
        score += 5;
        touch++;
        message.innerText = "You won! Score: " + score;
    }
}