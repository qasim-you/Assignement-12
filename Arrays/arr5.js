// 5. Write a js program to find second largest element in an array.
function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] > largest) {
        secondLargest = largest;
        largest = arr[i];
      } else if (arr[i] > secondLargest && arr[i] !== largest) {
        secondLargest = arr[i];
      }
    }
  
    return secondLargest;
  }
  

  const array = [1, 5, 3, 7, 2, 9, 4];
  const secondLargest = findSecondLargest(array);
  
  console.log(secondLargest);
  