// 13. Write a js program to reverse order of words in a given string
function getReverseWords(str) {
    let wordsArray = str.split(" ");
    let reversedWordsArray = wordsArray.reverse();
    let reversedStr = reversedWordsArray.join(" ");
    return reversedStr;
  }
  
  let str = "Hello Qasim, how are you?";
  let reversedStr = getReverseWords(str);
  console.log(reversedStr);
