
//check if it is even
let numbers = [10,20,3,40,50,60]

function filterNumbers (arr,filter){
  let result =[]
  for (var i = 0; i < arr.length; i++) {
   result.push(filter(arr[i]));
  }
  return result;
  
}
function isEven(num) {
    return num % 2 === 0;
}

console.log(filterNumbers(numbers,isEven))


//*************check for double */
// let num = [1, 2, 3, 4, 5];

// // Higher-order function map
// function map(arr, ops) {
//     let result = []; 
//     for (let i = 0; i < arr.length; i++) {
//         result.push(ops(arr[i]));  
//     }
//     return result; 
// }

// // Function double: Doubles each number
// function double(num) {
//     return num * 2;
// }

// console.log(map(num, double)); 