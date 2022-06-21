//  Write a function that takes two numbers (a and b) as argument
//  Sum a and b
//  Return the resul
function myFunction(a, b) {
  return a + b;
}
console.log(myFunction(2, 5));

//  Write a function that takes two values, say a and b, as arguments
//  Return true if the two values are equal and of the same type
function myFunction(a, b) {
  return a === b ? true : false;
}
console.log(myFunction(2, "2"));

//  Write a function that takes a value as argument
//  Return the type of the value
function myFunction(a) {
  return typeof a;
}
console.log(myFunction("Abdulrahman"));

//  Write a function that takes a string (a) and a number (n) as argument
//  Return the nth character of 'a'
function myFunction(a, n) {
  return a[n - 1];
  //   return a.charAt(n - 1);
}
console.log(myFunction("zyxbwpl", 5));

//  Write a function that takes a string (a) as argument
//  Remove the first 3 characters of a
//  Return the result
function myFunction(a) {
  return a.slice(3);
}
console.log(myFunction("abcdefg"));

//  Write a function that takes a string as argument
//  Extract the last 3 characters from the string
//  Return the result
function myFunction(str) {
  return str.slice(-3);
}
console.log(myFunction("fgedcba"));

// Write a function that takes a string (a) as argument
// Get the first 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(0, 3);
}
console.log(myFunction("abcdefg"));

// Write a function that takes a string (a) as argument
// Extract the first half a
// Return the result
function myFunction(a) {
  return a.slice(0, Math.round(a.length / 2));
}
console.log(myFunction("abcdefg"));

// Write a function that takes a string (a) as argument
// Remove the last 3 characters of a
// Return the result
function myFunction(a) {
  return a.slice(0, -3);
}
console.log(myFunction("1234"));

// Write a function that takes two numbers (a and b) as argument
// Return b percent of a
function myFunction(a, b) {
  return (b / 100) * a;
}
console.log(myFunction(100, 50));

// Write a function that takes 6 values (a,b,c,d,e,f) as arguments
// Sum a and b
// Then substract by c
// Then multiply by d and divide by e
// Finally raise to the power of f and return the result
// Tipp: mind the order
function myFunction(a, b, c, d, e, f) {
  return (((a + b - c) * d) / e) ** f;
}
console.log(myFunction(6, 5, 4, 3, 2, 1));

// Write a function that takes a number as argument
// If the number is even, return true
// Otherwise, return false
function myFunction(a) {
  return a % 2 === 0;
}
console.log(myFunction(-4));

// Write a function that takes two strings (a and b) as arguments
// Return the number of times a occurs in b
function myFunction(a, b) {
  return b.split(a).length - 1;
}
console.log(
  myFunction("a", "how many times does the character occur in this sentence?")
);

// Write a function that takes a number (a) as argument
// If a is a whole number (has no decimal place), return true
// Otherwise, return false
function myFunction(a) {
  return Number.isInteger(a);
}
console.log(myFunction(4));

// Write a function that takes two numbers (a and b) as arguments
// If a is smaller than b, divide a by b
// Otherwise, multiply both numbers
// Return the resulting value
function myFunction(a, b) {
  return a < b ? a / b : a * b;
}
console.log(myFunction(10, 100));

// Write a function that takes two strings (a and b) as arguments
// If a contains b, append b to the beginning of a
// If not, append it to the end
// Return the concatenation
function myFunction(a, b) {
  //   return a.split("").includes(b) ? b.concat(a) : a.concat(b);
  return a.indexOf(b) === -1 ? a + b : b + a;
}
console.log(myFunction("cheese", "cake"));

// Write a function that takes a number (a) as argument
// Round a to the 2nd digit after the comma
// Return the rounded number
function myFunction(a) {
  return parseFloat(a.toFixed(2));
}
console.log(myFunction(26.1379));

// Write a function that takes a number (a) as argument
// Split a into its individual digits and return them in an array
// Tipp: you might want to change the type of the number for the splitting
function myFunction(a) {
  return a.toString().split("").map(Number);
}
console.log(myFunction(931));

// It seems like something happened to these strings
// Can you figure out how to clear up the chaos?
// Write a function that joins these strings together such that they form the following words:
// 'Javascript', 'Countryside', and 'Downtown'
// You might want to apply basic JS string methods such as replace(), split(), slice() etc
function myFunction(a, b) {
  word_b = b.replace(/%/, "").split("").reverse().join("");
  word_a = a.replace(/%/, "");
  word = word_a.concat(word_a);
  return word;
}
console.log(myFunction("down", "nw%ot"));

//let a = "java";
// let filtered = a.split("").filter((elem) => {
//   elem === a[0].toUpperCase ? elem : elem.toUpperCase;
// });

// console.log(filtered);
