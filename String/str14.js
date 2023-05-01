// 14. Write a js program to find first occurrence of a character in a given string.
function getFindFirstOccurrence(str, char) {
    let index = str.indexOf(char);
    return index;
  }
  
  let str = "hello world";
  let char = "o";
  let index = getFindFirstOccurrence(str, char);
  console.log("The first occurrence of '" + char + "' in '" + str + "' is at index " + index);
  