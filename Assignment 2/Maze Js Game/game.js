/*************************************************************
 * game.js
 * @author Samer Saber
 * This code's purpose is to access html elements using DOM only,
 * and write event handling functions to make the html maze interactive.
 * Other files include: game.html, game.css
 * Last modified on Sunday, 18 of September 2022
 *************************************************************/

window.onload = function() {
    const boundary = document.getElementById("boundary1");
    boundary.onmouseover = touchBoundary;
}

function touchBoundary() {
    const boundary = document.getElementById("boundary1");
    boundary.style.backgroundColor = "#ff8888";
}