/*
This is a program that prints numbers from 1 to 100, however, 
if a number is divisible by both 3 and 5 it prints fizzbuzz.
Similarly, if the number is just divisible by 3 it prints fizz, and if it is just divisible by 5 it prints buzz. 
*/



for(let i = 1; i <= 100; i++){
    if(i % 3 == 0 && i % 5 == 0){
        console.log("FizzBuzz");
    }else if (i % 3 == 0){
        console.log("Fizz");
    }else if (i % 5 == 0){
        console.log("Buzz");
    }else{
        console.log(i);
    }
}