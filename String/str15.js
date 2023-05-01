// 15. Write a js program to find last occurrence of a character in a given string.
function findLastOccurrence(str, char) {
    let index = str.lastIndexOf(char);
    return index;
  }
  
  let str = "hello world";
  let char = "o";
  let index = findLastOccurrence(str, char);
  console.log("The last occurrence of '" + char + "' in '" + str + "' is at index " + index);
