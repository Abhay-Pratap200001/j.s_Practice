//  Write a function to return the length of a string.
// let name = 'Abhay'
// function strlen() {
//     console.log(name.length);
// }
//  strlen()



// Convert a string to uppercase.
// let Name = 'Abhay'
// console.log(Name.toUpperCase());




// Convert a string to lowercase
// let Name = 'Abhay'
// console.log(Name.toLowerCase());



// Capitalize the first letter of a string.
// let Name = 'abhay'
// console.log(Name.charAt(0).toUpperCase() + Name.slice(1));



// Find the index of a specific character in a string.
// let Name = 'ABHAY'
// let res = Name.indexOf('B')
// console.log(res);



// Find the last index of a specific character.
// let Name = 'ABHAY'
// let res = Name.indexOf('Y')
// console.log(res);



// Check if a string includes a specific substring.
// let Name = 'ABHAY'
// let res = Name.includes('A')
// console.log(res);




// Extract the first 5 characters of a string.
// console.log('AbhayPratap'.slice(0, 5));



// // Extract the last 3 characters of a string.
// console.log('AbhayPratap'.slice(8, 11));



// Replace a word in a string with another word.
// console.log('AbhayPratap'.replace("AbhayPratap", 'RATNAKAR'));



// Replace all instances of a word using regex.
// let text = "This is a test string. This is another test.";
// let ans = text.replace(/This/g,'')
// console.log(ans);


// Split a string into an array by spaces.
// console.log('Abhay'.split('').join('  '));



// // Join an array of words into a sentence.

// let arr = ['a','c','d','e','f','g']
// let sen = arr.join('')
// console.log(sen);




// // Trim spaces from both ends of a string.
// console.log('  Abhay  '.trim())




// ount how many times a specific character appears.
// let str = 'AAABHAY'
// let ch = 'a'
// let ct = 0
// for (let i = 0; i < str.length; i++) {
//     if(str[i].toLowerCase() === ch.toLowerCase()) 
//     ct++
// }
// console.log(`${ch} ${ct}`);


// Check if a string starts with a specific word.
// let str = 'AAABHAY'

// let strch = 'A'
// if (str.startsWith(strch)) {
//     console.log("True");
// }else{
//     console.log("false");   
// }




// Check if a string ends with a specific word.

// let str = 'AAABHAY'

// let strch = 'A'
// if (str.endsWith(strch)) {
//     console.log("True");
// }else{
//     console.log("false");   
// }


// Reverse a string.
// let str = 'AAABHAY'
// let ans = str.split('').reverse().join('')
// console.log(ans);


// // onvert a string to a number (parseInt, parseFloat).

// let strr = '22'

// let num =  parseInt(strr)
// console.log(typeof num);


// let strr = '22.22'

// let num =  parseFloat(strr)
// console.log( num);



// Check if a string is a palindrome (same forward and backward).
// let str = 'mom'
// let ans = str.split('').reverse().join('')
// console.log(str === ans && ans === str ? 'true' : 'false');



// Remove all whitespace from a string.
// let str = '   abhay   '
// let removewhites = str.trim()
// console.log(removewhites.length);
