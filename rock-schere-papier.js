

console.log("***Rock-Schere-Papier Projekt***")
console.log(" ")




// Step 2: Write the logic to acquire the computer choice
function getComputerChoice(random_number = Math.floor(Math.random() * 3)) {

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


console.log(getComputerChoice())
//   const randomIndexGenerator =  (Math.floor(Math.random() * (anecdotes.length - 1) )); 






// Step 3: Write the logic to gain the human choice. START

console.log(" ")
console.log("**Human choice**")


function getHumanChoice( sign = prompt("Select your move wisely? ") ) {
    
    if (sign == "rock" ||
        sign == "papier" || 
        sign == "schere") {

            return sign

} else {

    return "We politely request of you to select one of the three acceptable options."
}


    

}


console.log(getHumanChoice())




// Step 4: Declare the players score variables

