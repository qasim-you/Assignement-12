// 25. Write a js program to replace first occurrence of a character with another in a string.
function replaceFirstOccurrence(str, charToReplace, replacementChar) {
    const index = str.indexOf(charToReplace);
  
    if (index !== -1) {
      return str.substring(0, index) + replacementChar + str.substring(index + 1);
    }
  
    return str;
  }
  
 
  const input = "Hello World";
  const charToReplace = "o";
  const replacementChar = "x";
  const result = replaceFirstOccurrence(input, charToReplace, replacementChar);
  console.log(result);
  
