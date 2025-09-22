
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







