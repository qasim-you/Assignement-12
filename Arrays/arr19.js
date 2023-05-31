// Q no 19 Write a js program to sort array elements in ascending or descending order.
function sortArray(arr , order) {
    if (order ==='ascending') {
        return arr.sort((a,b)=>a-b) ;
    }
    else if(order ==='descending') {
        return arr.sort((a,b)=>b-a);
    }
    else{
        return arr ;
    }
}
const array = [5,2,9,7,4,11,3,1,6,8] ;
const accendingSort = sortArray(array ,'ascending') ;
const descendingSort = sortArray(array ,'descending') ;
console.log(accendingSort);