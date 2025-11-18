

console.log("***Rock-Schere-Papier Projekt***")
console.log("* GAME, V1 *")
console.log(" ")




// Step 2: Write the logic to acquire the computer choice
function acquireComputerChoice(random_number = Math.floor(Math.random() * 3)) {

    // random number line generates numbers 0, 1 ,2. coding is odd.


    if(random_number == 0){

        return "rock"

    }

    else if(random_number == 1){

        return "papier"
    }
  
    else if(random_number == 2){

        return "schere"
    }





}

console.log("**Computer choice**")
console.log(acquireComputerChoice())
//   const randomIndexGenerator =  (Math.floor(Math.random() * (anecdotes.length - 1) )); 






// Step 3: Write the logic to gain the human choice. START

// console.log(" ")
console.log("**Human choice**")


function acquireHumanChoice( sign = prompt("Select your move wisely:  ") ) {
    
    if (sign == "rock" ||
        sign == "papier" || 
        sign == "schere") {

            return sign

} else {

    return "We politely request of you to select one of the three acceptable options."
}


    

}


console.log(acquireHumanChoice())




// Step 4: Declare the players score variables

let humanScore = 0
let computerScore  = 0




// Step 5: Write the logic to play a single round

console.log(" ")
console.log("* GAME, V2 *")
console.log("*Single-round logic*")







// Step 6: Write the logic to play the entire game

// console.log(" ")
// console.log(" * Entire game logic * ")

// let round = 1

// function playGame(b) {


//     b = playRound()
      

    





  


   
// }



// // console.log(playGame())



console.log("")


// let text = "";

let round = 1;
while (round <= 5) {
//   text += "The number is " + i + "<br>";


  console.log("round:" , round)
function playRound( humanChoice , computerChoice ) {

  
// return humanChoice, computerChoice


//draw
if(humanChoice == "rock" && computerChoice == "rock"){

    console.log("Results: Draw")

}


else if(humanChoice == "papier" && computerChoice == "papier"){

    console.log("Results: Draw") 
    

}




else if(humanChoice == "schere" && computerChoice == "schere"){

    console.log("Results: Draw") 

}


//human win || lose
else if(humanChoice == "rock" && computerChoice == "papier"){

    console.log("Results: Human fails, since papier > rock ") 
    computerScore++


}


else if(humanChoice == "rock" && computerChoice == "schere"){

    console.log("Results: Human reigns, since rock > schere") 
    humanScore++


}


else if(humanChoice == "papier" && computerChoice == "rock"){

    console.log("Results: Human reigns, since papier > rock") 
    humanScore++


}

    
    


else if(humanChoice == "papier" && computerChoice == "schere"){

    console.log("Results:  Human fails, since papier > rock") 
    computerScore++


}


else if(humanChoice == "schere" && computerChoice == "rock"){

    console.log("Results:  Human fails, since rock > schere") 
    computerScore++


}


else if(humanChoice == "schere" && computerChoice == "papier"){

    console.log("Results:  Human reigns, since schere > papier") 
    humanScore++

}


else{
    console.log("Error 404, results not discovered.") 

}
    
   

            
}




const humanSelection = acquireHumanChoice();
const computerSelection = acquireComputerChoice();

playRound(humanSelection, computerSelection);

console.log("**Computer choice**")
console.log(computerSelection)
console.log("**Human choice**")
console.log(humanSelection)

console.log(" ")
console.log(" ~~Score-board~~ ")
console.log("human-score:" , humanScore)
console.log("computer-score:" , computerScore)
console.log(" ")
console.log(" ")




  round++;

}



        console.log("************************************************************************") 
        console.log("** FINAL WINNER **") 



if(humanScore > computerScore){


        console.log("** Human reigns **") 




}



else if(computerScore > humanScore) {

        console.log("** Computer reigns **") 



}



else if(computerScore == humanScore) {

        console.log("** Human and Computer reign **") 



}

