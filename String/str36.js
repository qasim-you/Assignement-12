// 36. Write a js program to trim trailing white space characters from given string.
function trimTrailingWhiteSpace(str) {
    return str.replace(/\s+$/, '');
  }
  
  // Example usage
  const input = "Hello World    ";
  const result = trimTrailingWhiteSpace(input);
  console.log(result);
  