// 8. Write a js program to copy all elements from an array to another array.
function copyElements(arr) {
    return [...arr]
}
const arr1 = [1,2,3,4,5,6] ;
const arr2 = copyElements(arr1)
console.log(arr2);
