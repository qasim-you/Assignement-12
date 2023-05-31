// 12. Write a js program to print all unique elements in the array.
function printUniqueElements(arr) {
    const uniqueElement = [...new Set(arr)]
    for (let i = 0; i < uniqueElement.length; i++) {
      console.log(uniqueElement[i]);
    }
}
const array = [1, 2, 3, 4, 2, 3, 1, 5];
printUniqueElements(array) ;