let numbers= [3,5,7,8,9,10,15,17,19];



numbers.forEach(num => {
    let flag = true;
    for(let i= 2; i < num; i++){
        if (num % i == 0){
            flag = false;
            break;
        }
    }
    if (flag){
        console.log(num + " is a prime number.");
    }else{
        console.log(num + " is not a prime number.");
    }
    
});

