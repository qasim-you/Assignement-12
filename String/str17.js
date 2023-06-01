// 17. Write a js program to count occurrences of a character in given string.
function countOccurrence(str, char) {
    let count = 0;
  
    for (let i = 0; i < str.length; i++) {
      if (str.charAt(i) === char) {
        count++;
      }
    }
  
    return count;
  }
  

  const inputString = "Hello, world!";
  const character = "o";
  const result = countOccurrence(inputString, character);
  
  console.log(`The character "${character}" occurs ${result} times in the string.`);
  