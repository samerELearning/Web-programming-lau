/*************************************************************
 * game.js
 * @author Samer Saber
 * This code's purpose is to access html elements using DOM only,
 * and write event handling functions to make the html maze interactive.
 * Other files include: game.html, game.css
 * Last modified on Sunday, 18 of September 2022
 *************************************************************/

window.onload = function() {
    const boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++)
    {
        boundaries[i].onmouseover = touchBoundary;
    }
}

function touchBoundary() {
    const boundaries = document.getElementsByClassName("boundary");
    for (var i = 0; i < boundaries.length; i++)
    {
        boundaries[i].style.backgroundColor = "#ff8888";
    }
    const example_boundary = document.getElementsByClassName("boundary example");
    example_boundary[0].style.backgroundColor = "#eeeeee";
}