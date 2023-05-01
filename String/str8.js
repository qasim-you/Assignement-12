// 8. Write a js program to find total number of alphabets, digits or special character in a string.
let str = "I am Qasim 121";

let alphabets = str.match(/[a-z]/ig).length;
let digits = str.match(/\d/g).length;
let special = str.match(/[^\w\s]/ig).length;

console.log("String: " + str);
console.log("Alphabets: " + alphabets);
console.log("Digits: " + digits);
console.log("Special Characters: " + special);
