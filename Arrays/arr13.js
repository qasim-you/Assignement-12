// 13. Write a js program to count total number of duplicate elements in an array.
function countDuplicates(arr) {
    const countMap = {};
    let duplicateCount = 0;
  
    for (let i = 0; i < arr.length; i++) {
      const element = arr[i];
      countMap[element] = (countMap[element] || 0) + 1;
    }
  
    for (const key in countMap) {
      if (countMap[key] > 1) {
        duplicateCount++;
      }
    }
  
    return duplicateCount;
  }
  const array = [1, 2, 3, 4, 2, 3, 1, 5];
  const totalDuplicates = countDuplicates(array);
  
  console.log(totalDuplicates); 
  