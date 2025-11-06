let styles = ["Jazz","Blues"];

console.log(styles);

styles.push("Rock and Roll");

console.log(styles);

let middle = parseInt((styles.length/2));
styles[middle] = "Classics";

console.log(styles);

styles.shift();

console.log(styles);


styles.unshift("Rap", "Reggae");

console.log(styles);
