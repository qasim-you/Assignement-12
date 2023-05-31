// Q no 18. Write a js program to search an element in an array.
function searchElements(arr ,element) {
    for(let i = 0; i < arr.length ;i++){
        if (arr[i] === element) {
            return i; 
          }

    }
    return -1 ;
}
const array= [1,12,4,3,7,5,6] ;
const searchElement = searchElements(array ,7) ;
console.log(searchElement);