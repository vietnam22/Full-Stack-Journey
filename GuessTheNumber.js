alert("Welcome to the Number Guessing Game. You get 7 tries.")
let secretNumber = Math.floor((Math.random() * 100)+1);
let numberOfTries = 0;
while(true){
    numberOfTries++;
    let guessedNumber = prompt("Guess the number from 1  to 100 :");
    if (guessedNumber == secretNumber){
        alert("You guessed it correctly. Congrats");
        break;
    }
    else if (Math.abs(guessedNumber - secretNumber) <= 2){
        alert("Hot Hot You are nearly there. Tries Remaining : "+(7-numberOfTries));
    }
    else if (Math.abs(guessedNumber - secretNumber) <= 5){
        alert("Its getting warmer.Tries Remaining : "+(7-numberOfTries));
    }
    else if (Math.abs(guessedNumber - secretNumber) <= 10){
        alert("Getting Warm! Keep Trying. Tries Remaining : "+(7-numberOfTries));
    }
    else{
        alert("Sorry gotta do a lot better than that. Tries Remaining : "+(7-numberOfTries));
    }
    
    if(numberOfTries == 7){
        alert("Sorry You've run out of Chances");
        alert("The secret number was " + secretNumber);
        break;
    }
}

