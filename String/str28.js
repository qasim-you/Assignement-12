// 28. Write a js program to find first occurrence of a word in a given string.
function findFirstOccurrence(str, word) {
    const words = str.split(' ');
  
    for (let i = 0; i < words.length; i++) {
      if (words[i] === word) {
        return i;
      }
    }
  
    return -1;
  }
  
  
  const input = "Hello World Hello World";
  const wordToFind = "World";
  const firstIndex = findFirstOccurrence(input, wordToFind);
  console.log(firstIndex);
  