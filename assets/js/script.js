// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

let currentNumberArray = [];
let cpus = [];
let nberGameWon = 0;
let nberGamePlayed = 0;
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
                document.getElementById('submit').classList.remove('disabled');
                document.getElementById("submit").disabled = false;
            } 
            else 
            {
                nberTryOut -= 1; 
                if (nberTryOut === 0 && resetFlag === 1) {
                    nberTryOut = 5;
                    alert(`Awwww.... sorry you lost! click on Start/Reset to restart the game !`);
                    nberGameWon-=1;
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
                        nberGamePlayed+=1;
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
    if ( (label[0].textContent === '==') &&
       (label[1].textContent === '==') &&
       (label[2].textContent === '==') &&
       (label[3].textContent === '==') &&
       (label[4].textContent === '==') &&
       (resetFlag === 1 )           ){
        nberGameWon+=1;
        setTimeout(()=>{
            alert(`Congratulations You Won!!!!    Click on Start/Reset to retart the game`);    
            resetPlayerBox();
            displayScore();
            resetFlag = 0;
        }, 1500);
       
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
    document.getElementById('submit').classList.add('disabled');
    document.getElementById("submit").disabled = true;

}

function displayScore(){
    let score = document.getElementById('score');
    score.textContent= `You scored:  ${nberGameWon} out of ${nberGamePlayed}`;

}