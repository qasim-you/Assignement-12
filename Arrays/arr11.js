// 11. Write a js program to count frequency of each element in an array.
function countFrequency(arr) {
    const frequency = {};
    for (let i = 0; i < arr.length; i++) {
        const element = arr[i];
        frequency[element] = (frequency[element] || 0) + 1;
        
    }
    return frequency ;
}
const array = [1, 2, 3, 4, 2, 3, 1, 5];
const result = countFrequency(array);
console.log(result);