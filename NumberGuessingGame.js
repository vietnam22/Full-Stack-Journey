let secretNumber = 32;
let guessedNumber;

while (true){
   guessedNumber = prompt("Guess the number : ");
   if (guessedNumber == secretNumber){
        alert("Congrats!!! you guessed it correctly");
        break;
   }
   else{
    alert("Sorry, you missed your mark. Try Again");
    continue;
   }
}
