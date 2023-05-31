// 14. Write a js program to delete all duplicate elements from an array.
function deleteDublicate(arr) {
    return [...new Set(arr)];

}
const array = [1,2,3,4,2,5,6,4,5,7,8,9] ;
const result = deleteDublicate(array) ;
console.log(result);