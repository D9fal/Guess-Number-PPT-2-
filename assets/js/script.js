// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let currentNumberArray = [];
let cpus = [];

document.addEventListener("DOMContentLoaded", function () {
    cpus = document.getElementsByClassName('cpu');
    let btns = document.getElementsByClassName('btn');
    let nberTryOut = 5 ; 
    for (let  btn of  btns) {
        btn.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "reset") {   
                nberTryOut = 5;  
                currentNumberArray = [];                 
                for (let i = 0; i < cpus.length; i++){
                    currentNumberArray.push(Math.floor(Math.random() * 9) + 1);                    
                } 
                console.info(currentNumberArray);
            } 
            else 
            {
                nberTryOut -= 1; 
                if (nberTryOut === 0 ) {
                    nberTryOut = 5;
                    alert(`Awwww.... sorry you lost! click on Start/Reset to restart the game !`);
                    resetPlayerBox();
                }
                else if (nberTryOut > 5  | nberTryOut < 0){
                    alert(`click on reset to restart the game !`);       
                    resetPlayerBox();          
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
    let plays = document.getElementsByClassName("ply");      
    let play =[];

    for (let i =0; i<5; i++){
        play.push( parseInt(plays[i].value)); 
       
    }
    compareOptions(currentNumberArray, play);   

}

function compareOptions(cpu,play){
    let label = document.getElementsByTagName('label');    
    for (let i=0; i< 5; i++){        
        if ((cpu[i]-play[i]) > 0 ){
            console.log('guess too small');
            label[i].textContent = '>> ';
        }else if ((cpu[i]-play[i]) < 0) {
            console.log('guess too big');
            label[i].textContent = '<<';
        }
        else 
        {
            cpus[i].innerText = cpu[i]; 
            label[i].textContent = '==';
        }

    }

   if (  (label[0].textContent==='==') 
      && (label[1].textContent==='==')
      && (label[2].textContent==='==')
      && (label[3].textContent==='==')
      && (label[3].textContent==='==') ){
    alert(`Congratulations You Won!!!!    Click on Start/Reset to retart the game`);
    resetPlayerBox();
   }
       
}

function resetPlayerBox(){
    let plays = document.getElementsByClassName("ply");                    
        for (let play of plays){                        
            play.value = '0';                        
        }
        let cpus = document.getElementsByClassName("cpu");                    
        for (let cpu of cpus){                        
            cpu.textContent = 'X';                        
        }
}