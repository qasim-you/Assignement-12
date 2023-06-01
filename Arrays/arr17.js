// 17. Write a js program to put even and odd elements of array in two separate array.
function separateEvenOdd(arr) {
    const evenArr = [] ;
    const oddArr = [] ;

    for (let i = 0; i < arr.length; i++) {
    if (arr[i]%2===0) {
        evenArr.push(arr[i]) ;

    }
    else{
        oddArr.push(arr[i]) ;
    }
}
     return [evenArr , oddArr] ;
 }
 const array = [5, 2, 9, 10, 8, 3, 7, 4];
const [evenArr, oddArr] = separateEvenOdd(array);
console.log(evenArr); 
console.log(oddArr); 
