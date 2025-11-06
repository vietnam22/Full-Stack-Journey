// Challenge 1:
// Create an array of prices [10, 25, 30, 15, 40]. Use .map() to add 10% tax to each price.

let prices = [10, 25, 30, 15, 40];

let addedTaxPrices = prices.map(num => 1.1 * num);

console.log(addedTaxPrices);

// Challenge 2:
// Create an array of ages [12, 18, 25, 16, 30, 14, 22]. Use .filter() to get only adults (18+).
let ages = [12, 18, 25, 16, 30, 14, 22];
let adultAges = ages.filter(age => age >= 18);

console.log(adultAges);

// Challenge 3:
// Create an array of numbers [5, 10, 15, 20, 25]. Use .forEach() to print each number multiplied by 3.
let numbers = [5, 10, 15, 20, 25];

numbers.forEach(num => {
    console.log(num*3);
});

// Write these using .reduce():
// 1. Product of all numbers:
// javascriptconst numbers = [2, 3, 4];
// // Result should be: 2 * 3 * 4 = 24

const numero = [2,3,4];

const Product = numero.reduce((prod,num) => prod * num,1);

console.log(Product);


// 2. Concatenate strings:
// javascriptconst words = ["Hello", " ", "World", "!"];
// // Result should be: "Hello World!"

const words = ["Hello", " ", "World", "!"];
const concat = words.reduce((sum,word) => sum + word,"");
console.log(concat);

