// Wait for the DOM to finish loading before running the game
// Get the button elements and add event listeners to them

document.addEventListener("DOMContentLoaded", function () {
    let cpus = document.getElementsByClassName('cpu');
    let btns = document.getElementsByClassName('btn');
    let NberTryOut = 5 ; 
    for (let  btn of  btns) {
        btn.addEventListener("click", function () {
            if (this.getAttribute("data-type") === "reset") {   
                NberTryOut = 5;                   
                for (let i = 0; i < cpus.length; i++){
                    cpus[i].value =  Math.floor(Math.random() * 9) + 1;
                    
                } 
                
            } 
            else 
            {
                NberTryOut -= 1; 
                if (NberTryOut === 0 ) {
                    NberTryOut = 5;
                    alert(`Awwww.... sorry you lost! click on Start/Reset to restart the game !`);

                }
                else if (NberTryOut > 5  | NberTryOut < 0){

                    alert(`click on reset to restart the game !`);
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
    let cpus = document.getElementsByClassName("cpu");      
    let play =[];
    let cpu =[];   

    for (let i =0; i<5; i++){
        play.push( parseInt(plays[i].value)); 
        cpu.push( parseInt(cpus[i].value));        
    }
    funct_compare(cpu,play);  

}

function funct_compare(cpu,play){
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
            
            label[i].textContent = '==';
        }

    }

   if (label[0].textContent===label[1].textContent === label[2].textContent ===label[3].textContent ===label[4].textContent){
    alert(`Congratulations You Won!!!!    Click on Start/Reset to retart the game`);

   }
       
}