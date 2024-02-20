//basic array oparation
let colors = ['pink','purple','blue']
colors.push('green')  //insert a color at the end of an array
colors.pop()  //remove the last element of an array

colors.unshift('red')  //insert a color at the beginning of an array

colors.shift()  //remove the first element of an array

colors.splice(1,1)  //remove the element at index 1 and remove one element after it

//******************************array iteration and manipulation ***************************

for (let i = 0; i < colors.length; i++) {
    console.log(colors[i]);
  } //print  all elements in the array using for loop

let numbers = [1, 2, 3, 4, 5];
let doubledNumbers = numbers.map(num => num * 2); // double  each number in the array
console.log(doubledNumbers); //[2, 4, 6, 
let sum = numbers.reduce((acc, num) => acc + num, 0);// sum  up all the numbers in the 

let allPositive = numbers.every(num => num > 0);// check  if every number is positive or greater than  zero

//********************************array searching&******************************8 */

let indexOfGreen = colors.indexOf("green"); // find  the index of "green" in the array
let sortedNumbers = numbers.sort((a, b) => a - b); // sort  the array in ascending order
let reversedColors = colors.reverse();// sort   the array in descending order*/

//****************************advanced array oparations */

let helloArray = "Hello, World!".split("");// convert  string to array by splitting on each character
let joinedArray = ["Hello", "World"].join(", ");// join  the array elements
let filteredNumbers = numbers.filter(num => num > 2); // filter  out all the numbers that are less than 2
let singleElementArray = [true].concat([false]).concat([null]); // concatenate
let flatArray = [[1, 2], [3, 4], [5, 6]].flat(); // flatten  the nested array


let groupedNumbers = numbers.reduce((acc, num) => {
  acc[num % 2 === 0 ? "even" : "odd"].push(num);
  return acc;
}, { even: [], odd: [] }); // this  Group elements in the numbers array by odd and even.
let isSameType = mixedArray.every((el, _, arr) => typeof el === typeof arr[0]);// this  Checks whether all elements in the array have the same type.

let su = numbers.reduce((acc, num) => acc + num, 0); // this  Calculate the sum of all the numbers in the array reduce() method is used to transform an array into another value,.

//***********************************array string manipulation */

let sentence = "I love JavaScript JavaScript is awesome!";
let wordCount = sentence.split(" ").reduce((acc, word) => {
  acc[word] = (acc[word] || 0) + 1;
  return acc;
}, {}); //this  counts how many times each word appears in the sentence

let replacedFruits = fruits.map(fruit => fruit === "apple" ? "orange" : fruit);//replace   all occurrences of "apple" with "orange"