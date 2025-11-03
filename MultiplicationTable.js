function multiplicationTable(number, from, to){
    console.log("\nTable for " + number);
    console.log("-----------------------------------------");
    
    for(let i = from; i <= to; i++){
        console.log(number + " x " + i + " = " + (number*i));
    }
    
    console.log("-----------------------------------------");
}

multiplicationTable(5, 3, 8);
multiplicationTable(11, 16, 19);
multiplicationTable(3, 6, 9);