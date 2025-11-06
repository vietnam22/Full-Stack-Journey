function findMax(numbers){
    let max = numbers[0];
    for(let i = 1; i < numbers.length; i++){
        if (numbers[i] > max){
            max = numbers [i];
        }
    }
    console.log("The maximum number in the array is : " + max);
}


findMax([4,6,7,9,11]);
findMax([44,55,66,77,22]);
findMax([66,45,32,99]);