// 18. Write a js program to find highest frequency character in a string.
function findHighestFrequencyChar(str) {
    const charMap = {};
  
    for (let char of str) {
      if (charMap[char]) {
        charMap[char]++;
      } else {
        charMap[char] = 1;
      }
    }
  
    let highestFrequency = 0;
    let highestFrequencyChar = null;
  
    for (let char in charMap) {
      if (charMap[char] > highestFrequency) {
        highestFrequency = charMap[char];
        highestFrequencyChar = char;
      }
    }
  
    return highestFrequencyChar;
  }
  
  // Example usage:
  const inputString = "Hello, world!";
  const result = findHighestFrequencyChar(inputString);
  
  console.log(`The highest frequency character in the string is "${result}".`);
  
