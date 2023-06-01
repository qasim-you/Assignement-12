// 19. Write a js program to find lowest frequency character in a string.
function findLowestFrequencyCharacter(str) {
    const charCount = {};
  
   
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    let lowestFreqChar = null;
    let lowestFreq = Infinity;
  
    // Find the character with the lowest frequency
    for (const char in charCount) {
      if (charCount[char] < lowestFreq) {
        lowestFreq = charCount[char];
        lowestFreqChar = char;
      }
    }
  
    return lowestFreqChar;
  }
  

  const input = "Hello World";
  const lowestFreqChar = findLowestFrequencyCharacter(input);
  console.log(`The lowest frequency characters in "${input}" is "${lowestFreqChar}"`);
  