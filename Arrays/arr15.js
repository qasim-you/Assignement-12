// 15. Write a js program to merge two array to third array.
function murgeTwoArr(arr1,arr2) {
    return [...arr1 ,...arr2] ;
}
const arr1 = [1,2,3] ;
const arr2 = [4,5,6] ;
const mergeArray = murgeTwoArr(arr1,arr2) ;
console.log(mergeArray);