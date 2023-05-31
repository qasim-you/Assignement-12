// Q no 21 . Write a js program to leftt rotate an array
function leftRotate(arr , r) {
    if (arr.length===0) {
        return arr;
    }
    r = r%arr.length ;

    
  reverseArray(arr, 0, r - 1);
  reverseArray(arr, r, arr.length - 1);
  reverseArray(arr, 0, arr.length - 1);
  return arr ;
    
}
function reverseArray( arr ,start , end) {
    while (start < end) {
        const temp = arr[start] ;
        arr[start] = arr[end] ;
        arr[end]  = temp ;
        start++ ;
        end-- ;
    }
}
const array  = [1 ,2,3,4,5] ;
const rotation = 2 ;
const rotateArray = leftRotate(array , rotation) ;
console.log(rotateArray);
