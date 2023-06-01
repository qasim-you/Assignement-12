// 30. Write a js program to search all occurrences of a word in given string.
function searchAllOccurrences(str, word) {
    const regex = new RegExp(word, 'gi');
    const matches = str.match(regex);
  
    return matches || [];
  }
  
 
  const input = "Hello World Hello World";
  const wordToSearch = "World";
  const occurrences = searchAllOccurrences(input, wordToSearch);
  console.log(occurrences);
  