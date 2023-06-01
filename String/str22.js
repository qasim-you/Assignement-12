// 22. Write a js program to remove last occurrence of a character from string.
function removeAllOccurrence(str, char) {
   return str.split(char).join('');
  }
  
  
  const input = "I am Developer";
  const charToRemove = "e";
  const result = removeAllOccurrence(input, charToRemove);
  console.log(result);
  