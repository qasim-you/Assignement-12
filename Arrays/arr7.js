// 7. Write a js program to count total number of negative elements in an array.
function countNegativeElements(arr) {
    let count = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] < 0) {
        count++;
      }
    }
  
    return count;
  }
  
 
  const array = [-1, 2, -3, 4, -5];
  const totalNegative = countNegativeElements(array);
  
  console.log(totalNegative); 
  