// 3. Write a js program to find sum of all array elements. 
const arr = [ 121, 345, 654, 789 , 786 ] ;
let sum = 0 ;
for (let index = 0; index < arr.length; index++) {
    sum += arr[index];
    
}
console.log(`Sum of all array element ${sum}`);