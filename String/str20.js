// 20. Write a js program to count frequency of each character in a string.

function countFrequency(str) {
    const charCount = {} ;
    for (let i = 0; i < str.length; i++) {
        const char = str.charAt(i);
        
        charCount[char] = charCount[char] ? charCount[char] + 1 : 1;
  
        
    }
    return charCount ;
}
const input = "Hello World";
const frequencyCount = countFrequency(input);
console.log(frequencyCount);