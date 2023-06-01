// 32. Write a js program to remove first occurrence of a word from string.
function removeFirstOccurrence(str, word) {
    const regex = new RegExp('\\b' + word + '\\b');
    return str.replace(regex, '');
  }
  

  const input = "Hello World Hello World";
  const wordToRemove = "World";
  const result = removeFirstOccurrence(input, wordToRemove);
  console.log(result);
  