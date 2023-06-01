// 21. Write a js program to remove first occurrence of a character from string.
function removeFirstOccurrence(str, char) {
    const index = str.indexOf(char);
  
    if (index !== -1) {
      return str.substring(0, index) + str.substring(index + 1);
    }
  
    return str;
  }
  
  
  const input = "I am Developer";
  const charToRemove = "l";
  const result = removeFirstOccurrence(input, charToRemove);
  console.log(result);
  