// 9. Write a js program to count total number of vowels and consonants in a string.
const countVowelsAndConstants = (str) => {
let counts = {
    vowels : 0,
    consonants : 0,
}

let vowels = str.match(/[aeiou]/ig);
let consonants = str.match(/[bcdfghjklmnpqrstvwxyz]/ig);

if (vowels) {
  counts.vowels = vowels.length;
}

if (consonants) {
  counts.consonants = consonants.length;
}

return counts;
}
let str = "Qasim is  student" ;
let result = countVowelsAndConstants(str)
console.log(result);
