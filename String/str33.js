// 33. Write a js program to remove last occurrence of a word in given string.
function removeLastOccurrence(str, word) {
    const reversedStr = str.split('').reverse().join('');
    const reversedWord = word.split('').reverse().join('');
    const regex = new RegExp('\\b' + reversedWord + '\\b');
    const reversedResult = reversedStr.replace(regex, '').split('').reverse().join('');
    return reversedResult;
  }
  
  // Example usage
  const input = "Hello World Hello World";
  const wordToRemove = "World";
  const result = removeLastOccurrence(input, wordToRemove);
  console.log(result);
  