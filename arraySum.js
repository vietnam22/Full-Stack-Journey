let numbers = [2,4,5,6,7,9,10];
sumArray(numbers);



function sumArray (num){
    let sum = 0;
    for(let i= 0; i<num.length;i++){
    sum = sum + num[i]
    
    }
    console.log("The sum of the array is "+ sum);


}