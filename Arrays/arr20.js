//  Q no 20 Write a js program to sort even and odd elements of array separately.
function sortOddEven(arr) {
    const evenArr = [] ;
    const oddArr = [] ;
    for ( let i = 0 ; i< arr.length ; i++){
        if (arr[i]%2===0) {
            evenArr.push(arr[i]) ;

        }
        else{
            oddArr.push(arr[i]) ;
        }
    } 
    
    evenArr.sort((a, b) => a - b);
    oddArr.sort((a, b) => a - b);

    return[...evenArr, ...oddArr] 
}
const array = [3,5,7,2,6,9,11,8] ;
const sortedArray = sortOddEven(array) ;
console.log(sortedArray);