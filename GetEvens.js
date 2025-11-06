function getEvens(numbers){
    let evenArray = [];
    for(let i = 0; i < numbers.length; i++){
        if (numbers[i] % 2 === 0){
            evenArray.push(numbers[i]);
        }
    }
    console.log(evenArray);
}


getEvens([3,4,6,77,44,21,32]);
getEvens([22,32,45,46,88,86]);
getEvens([22,21,43,55,46]);