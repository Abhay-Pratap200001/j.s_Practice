
// Write a program to print numbers from 1 to 10.
// let arr = [1,2,3,4,5,6,7,8,9,10]
// console.log(arr);


// Print all even numbers between 1 and 100.
// let arr = [1,2,3,4,5,6,7,8,9,10];
// arr.forEach((i) => {
//   if (i % 2 === 0) {
//     console.log(i);
//   }
// });


// Find the sum of numbers from 1 to n.
// let n = [1,2,3,4,5,6,7,8,9,10];
// let sum = 0
// for (let i = 0; i < n.length; i++) {
//     sum = sum + n[i]
// }
// console.log(sum);



// // Check if a number is even or odd.
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// for (i = 0; i < n.length; i++) {
//   if (n[i] % 2 === 0) {
//     console.log(`${n[i]} === even`);
//   } else {
//     console.log(`${n[i]} === odd`);
//   }
// }



// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// // Initialize three variables to hold the top 3 largest numbers
// let first = -Infinity;   // largest
// let second = -Infinity;  // 2nd largest
// let third = -Infinity;   // 3rd largest

// for (let i = 0; i < n.length; i++) {
//   let current = n[i];
  
//   if (current > first) {
//     third = second;
//     second = first;
//     first = current;
//   } else if (current > second && current < first) {
//     third = second;
//     second = current;
//   } else if (current > third && current < second) {
//     third = current;
//   }
// }
// console.log(`Top 3 largest numbers are: ${first}, ${second}, ${third}`);


// // Reverse a string.
// let str = 'ABHAY'
// let ans = str.split('').reverse().join('')
// console.log(ans);


// // Check if a string is a palindrome.
// let str = 'yoy'
// let ans = str.split('').reverse().join('')
// console.log(ans === str && str === ans ? 'true' : 'false');


// Find the factorial of a number.
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let fac = 1
// for(let i = 0; i < n.length; i++){
//     fac = fac * n[i]
// }
// console.log(fac);



// Count the number of vowels in a string.

// let str = 'ajbascbsckjkankasckkoiqwertylazvbnm'
// let vovel = 0
// for(let i = 0; i < str.length; i++){
//     let char = str[i].toLocaleLowerCase();
//     if (char === 'a' || char === 'e' || char === 'i' || char === 'o' || char === 'u') {   
//         vovel++
//     }
// }
// console.log(vovel);



// Find the maximum element in an array.
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let max = n[0]
// for (let i = 0; i < n.length; i++) {
//     if (n[i] > max) {
//         max = n[i]
//     }
// }
// console.log(max);



// Find the minimum element in an array.
// let n = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let min = n[0]
// for (let i = 0; i < n.length; i++) {
//     if (n[i]<min) {
//         min = n[i]
//     }    
// }
// console.log(min);


// Count positive, negative, and zero numbers in an array.
// let n = [-22, -33, -54, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
// let countpositive = 0
// let countnegative = 0
// let zero = 0;

// for (let index = 0; index < n.length; index++) {
//     let element = n[index];
//     element > 0 ? countpositive++ : element < 0  ? countnegative++ : zero++
// }
// console.log(countpositive);
// console.log(countnegative);
// console.log(zero);


// Check if a number is prime.
// Array of numbers (some positive, negative, and zero)
// let array = [-22, -33, -54, 0, 0, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// // Function to check if a number is prime
// function isPrime(num) {
//     if (num <= 1) return false;      // 0, 1, and negatives are not prime
//     if (num === 2) return true;      // 2 is the smallest (and only even) prime number
//     if (num % 2 === 0) return false; // other even numbers are not prime

//     // Check for factors from 3 up to the square root of num
//     for (let i = 3; i <= Math.sqrt(num); i = i + 2) {
//         if (num % i === 0) return false; // found a factor, not prime
//     }

//     return true; // no factors found, it's prime
// }

// // Loop through array and check each number
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];

//     if (isPrime(element)) {
//         console.log(`${element} is a prime number`);
//     } else {
//         console.log(`${element} is NOT a prime number`);
//     }
// }


// // Print multiplication table of a number.
// for (let index = 1; index <= 10; index++) {
//     const element = index;
//     console.log(`2 * ${index} = ${2 * element}`);
// }


// Swap two numbers without using a third variable.
// let num1 = 2;
// let num2 = 20;

// [num1, num2] = [num2, num1]
// console.log(num1);
// console.log(num2);


// Find the number of digits in a number.
// let array = [1,22,444,66,788,90]
// let caldig = []
// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
//     caldig.push(element.toString().length)
// }
// console.log(caldig);



// Reverse a number.
let array = [1,2,3,4,5,6,7,8,9,20]
for (let index = array.length-1; index >= 0 ; index--) {
    const element = array[index];
    console.log(element);   
}