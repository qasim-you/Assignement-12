// 29. Write a js program to find last occurrence of a word in a given string.
function findLastOccurrence(str, word) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        lastIndex = i;
      }
    }
  
    return lastIndex;
  }
  
  
  const input = "Hello World Hello World";
  const wordToFind = "World";
  const firstIndex = findLastOccurrence(input, wordToFind);
  console.log(firstIndex);