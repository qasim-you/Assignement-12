// 12. Write a js program to check whether a string is palindrome or not.
function isPalindrome(str) {
    let reversedStr = str.split("").reverse().join("");
    return str === reversedStr;
  }
  
  let str = "racecar";
  if (isPalindrome(str)) {
    console.log(str + " is a palindrome");
  } else {
    console.log(str + " is not a palindrome");
  }
  
