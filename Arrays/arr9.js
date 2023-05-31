// 9. Write a js program to insert an element in an array.
function insertElement(arr,element,index) {
    arr.splice(index,0,element);
    return arr ;
}
const array = [1,2,3,4,5] ;
const insertArray = insertElement(array ,10 ,2) ;
console.log(insertArray);