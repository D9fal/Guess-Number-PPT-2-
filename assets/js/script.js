// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let cpus = document.getElementsByClassName('cpu');
    let btns = document.getElementsByClassName('btn');
    let NberTryOut = 5 ; 
    for (let  btn of  btns) {

        btn.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "reset") {   
                let NberTryOut = 5 ;                        
                for (let i = 0; i < cpus.length; i++){
                    cpus[i].value =  Math.floor(Math.random() * 9) + 1;
                    
                } 
                
            } 
            else 
            {
                NberTryOut -= 1; 
                if (NberTryOut === 0 ) {
                    alert(`Awwww.... sorry you lost! click on reset to restart the game !`);
                }
                else
                {
                    checkNumber();
                }
                

            }
        });

    
    }   

    
});

function checkNumber(){

    console.log('checking the number');

}