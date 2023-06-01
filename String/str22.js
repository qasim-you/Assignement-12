// 22. Write a js program to remove last occurrence of a character from string.
function removeLastOccurrence(str, char) {
    const index = str.lastIndexOf(char);
  
    if (index !== -1) {
      return str.substring(0, index) + str.substring(index + 1);
    }
  
    return str;
  }
  
  
  const input = "I am Developer";
  const charToRemove = "l";
  const result = removeFirstOccurrence(input, charToRemove);
  console.log(result);
  