// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let cpus = document.getElementsByClassName('cpu');
    for (let i = 0; i < cpus.length; i++){
        cpus[i].value =  Math.floor(Math.random() * 9) + 1;
    
    }
    
    
});

