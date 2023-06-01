// 24. Write a js program to remove all repeated characters from a given string.
function removeRepeatCharacters(str) {
    const charCount = {};
    let result = '';

    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
    }
  
    for (let i = 0; i < str.length; i++) {
      const char = str.charAt(i);
      if (charCount[char] === 1) {
        result += char;
      }
    }
  
    return result;
  }
  

  const input = "Hello World";
  const result = removeRepeatCharacters(input);
  console.log(result);
  