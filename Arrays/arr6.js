// 6. Write a js program to count total number of even and odd elements in an array.
function countEvenOddElements(arr) {
    let evenCount = 0;
    let oddCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      if (arr[i] % 2 === 0) {
        evenCount++;
      } else {
        oddCount++;
      }
    }
  
    return { even: evenCount, odd: oddCount };
  }
  
  
  const array = [1, 2, 3, 4, 5];
  const result = countEvenOddElements(array);
  
  console.log(counts); 
  