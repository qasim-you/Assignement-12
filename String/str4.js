// Write a js program to compare two strings.
let oneStr  = "Hello" ;
let secStr = "Hello" ;
let newStr = oneStr.localeCompare(secStr) ;
let result = newStr > 0 ? console.log(`${oneStr} before ${secStr} is an alphabetical orders`) :console.log(`${oneStr} before ${secStr} not an alphabetical orders`)  ;
console.log(result);