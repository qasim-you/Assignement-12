// 26. Write a js program to replace last occurrence of a character with another in a string.

function replaceLastOccurrence(str, charToReplace, replacementChar) {
    const index = str.lastIndexOf(charToReplace);
  
    if (index !== -1) {
      return str.substring(0, index) + replacementChar + str.substring(index + 1);
    }
  
    return str;
  }
  
 
  const input = "Hello World";
  const charToReplace = "o";
  const replacementChar = "x";
  const result = replaceLastOccurrence(input, charToReplace, replacementChar);
  console.log(result);
  