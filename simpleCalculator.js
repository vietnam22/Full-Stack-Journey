console.log("A simple calculator");

let num1=6, num2=5;
let operation = "/";

let result;

if(operation === "+"){
    result = num1 + num2 ;
}
else if(operation === "-"){
    result = num1 - num2;
}
else if(operation === "*"){
    result = num1 * num2;
}
else if(operation === "/"){
    result = num1 / num2;
}
else{
    result = "Invalid";
}

console.log(num1 +" "+ operation +" "+ num2 + " = " + result);

