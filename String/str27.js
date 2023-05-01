// 27. Write a js program to replace all occurrences of a character with another in a string.
let origStr = "gun is not a fun" ;
let chatToReplace = "f" ;
let replaceChar = "g" ;
let newStr = origStr.split(chatToReplace).join(replaceChar) ;
console.log(newStr);