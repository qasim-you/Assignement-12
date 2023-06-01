// 34. Write a js program to remove all occurrence of a word in given string.
function removeAllOccurrences(str, word) {
    const regex = new RegExp('\\b' + word + '\\b', 'g');
    return str.replace(regex, '');
  }
  

  const input = "Hello World Hello World";
  const wordToRemove = "World";
  const result = removeAllOccurrences(input, wordToRemove);
  console.log(result);
  