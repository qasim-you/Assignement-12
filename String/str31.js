// 31. Write a js program to count occurrences of a word in a given string.
function countOccurrences(str, word) {
    const regex = new RegExp(word, 'gi');
    const matches = str.match(regex);
  
    return matches ? matches.length : 0;
  }
  
  const input = "Hello World Hello World";
  const wordToCount = "World";
  const occurrenceCount = countOccurrences(input, wordToCount);
  console.log(occurrenceCount);
  