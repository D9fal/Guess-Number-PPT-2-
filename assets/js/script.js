// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let currentNumberArray = [];
let cpus = [];
let n = 0;
let m = 0;
let resetFlag = 0;

document.addEventListener("DOMContentLoaded", function () {
    cpus = document.getElementsByClassName('cpu');
    let btns = document.getElementsByClassName('btn');

    let nberTryOut = 5 ; 
    for (let  btn of  btns) {
        btn.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "reset") {   
                resetFlag = 1;
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
                if (nberTryOut === 0 && resetFlag === 1) {
                    nberTryOut = 5;
                    alert(`Awwww.... sorry you lost! click on Start/Reset to restart the game !`);
                    n-=1;
                    resetPlayerBox();
                    displayScore();
                    resetFlag = 0;
                }
                else if ((nberTryOut > 5  || nberTryOut < 0) && resetFlag === 1){
                    alert(`click on reset to restart the game !`);   
                    resetPlayerBox();  
                    resetFlag = 0;      
                }
                else
                {
                    if (resetFlag === 1){
                        m+=1;
                        checkNumber();                       
                    } else {
                        alert(`click on Reset/Restart!!!  .. to submit your guess!`);
                    }
                    
                    

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
            label[i].textContent = '>> ';
        }
        
        else if ((cpu[i]-play[i]) < 0) {            
            label[i].textContent = '<<';
        }

        else if ((cpu[i]-play[i]) === 0)
        {
            label[i].textContent = '==';
            cpus[i].innerText = cpu[i];   
            
        }        
    }
    
    win();
    
}

function win (){
    let label = document.getElementsByTagName('label'); 
    if ( (label[0].textContent === '==') 
      && (label[1].textContent === '==')
      && (label[2].textContent === '==')
      && (label[3].textContent === '==')
      && (label[4].textContent === '==') 
      && (resetFlag === 1 )           ){
        n+=1;
        alert(`Congratulations You Won!!!!    Click on Start/Reset to retart the game`);    
        resetPlayerBox();
        displayScore();
        resetFlag = 0;
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
    let lbls = document.getElementsByTagName("label");                    
    for (let lbl of lbls){                        
        lbl.textContent = '--';                        
    }

}

function displayScore(){
    let score = document.getElementById('score');
    score.textContent= `You scored:  ${n} out of ${m}`;

}