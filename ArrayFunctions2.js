/* Challenge 1: Shopping Cart
javascriptconst cart = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 },
    { name: "Jacket", price: 80 }
];
Task:
Filter items that cost less than $50
Get just the names of those items
Print each name */

const cart = [
    { name: "Shirt", price: 20 },
    { name: "Shoes", price: 50 },
    { name: "Hat", price: 15 },
    { name: "Jacket", price: 80 }
];

const final1 = cart.filter(item => item.price < 50)

final1.forEach(item => {
    console.log(item.name);
});


/* Challenge 2: Student Grades
javascriptconst students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 65 },
    { name: "Eve", grade: 88 }
];
Task:

Filter students with grades 80 or above
Calculate the average grade of those students
Print the result */


const students = [
    { name: "Alice", grade: 85 },
    { name: "Bob", grade: 72 },
    { name: "Charlie", grade: 90 },
    { name: "David", grade: 65 },
    { name: "Eve", grade: 88 }
];

const filtered = students.filter(gradesAbove80 => gradesAbove80.grade >= 80);
let totalStudentsWithGradeAbove80 = filtered.length;
console.log(filtered);

const reduced = filtered.reduce((sum,grades) => sum = sum + grades.grade, 0);
console.log(reduced);

let average = reduced / totalStudentsWithGradeAbove80;
console.log("The average  of the students with above 80 grade is : "+ average);
