// 38. Write a js program to remove all extra blank spaces from given string.
let originalString = " Hello   I  am      Qasim       " ;
let newString = originalString.replace(/\s+/g, " ").trim();
console.log(newString);