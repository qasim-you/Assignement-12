// 35. Write a js program to trim leading white space characters from given string.
function trimLeadingWhiteSpace(str) {
    return str.replace(/^\s+/, '');
  }
  
 
  const input = "    Hello World";
  const result = trimLeadingWhiteSpace(input);
  console.log(result);
  