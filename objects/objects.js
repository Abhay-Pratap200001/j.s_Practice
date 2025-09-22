// //Type of declaring objects

//                      // <---------------------------------------------------------->

// // 1. if we create obj from constructor its signleton


// //  Creating obj with object literals
// // const mysm = Symbol("Key1")

// // const JsUser = {
// //     Name: 'Abhay',
// //     age: 21,
// //     [mysm]:'syumbol',
// //     location: 'Lucknow',
// //     email: 'abhay@gmail.com',
// //     isLoggedIn: false,
// //     lastLoggedin: ['Monday', 'Saturday']
// // }

// // // console.log(JsUser.Name);
// // // console.log(JsUser["age"]);
// // // console.log(typeof JsUser[mysm]);

// // JsUser.greeting = function(){
// //     console.log('Hello.............................', this.email);
    
// // }


// // // Object.freeze(JsUser)

// // console.log(JsUser.greeting());



// // <-------------------------------------------PART2---------------------------------------------->


// // Creating obj in object literals

// // const tender  = new Object{}

// const tender = {}
// tender.id = '20000'
// tender.name = 'Abhay'
// // console.log(tender);

// const regular = {
//   email: 'abh@gmail.com',
//   fullname: {
//     username:{
//         firstname: 'Abhay',
//         lastname: "Pratap"
//     }
//   }
// }

// // console.log(regular.fullname.username.firstname);

// const obj1 = {1: 'a', 2: 'b'}
// const obj2 = {3: 'c', 2: 'd'}
// // console.log(Object.values(tender));



// // Create an object to store a person’s name, age, and city.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// console.log(studinfo);



// Access the value of a key from an object using dot and bracket notation.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// console.log(studinfo.name);
// console.log(studinfo["age"]);



// Add a new key email to an existing object.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// studinfo.email = 'abhay@gmail.com'
// console.log(studinfo);



// Delete the city key from an object.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// studinfo.email = 'abhay@gmail.com'
// delete studinfo.city;
// console.log(studinfo);


// Check if a key exists in an object using in operator.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// studinfo.email = 'abhay@gmail.com'

// if ('name' in studinfo) {
//   console.log('The "name" key exists.' + studinfo.name.);
// } else {
//   console.log('The "name" key does not exist.');
// }


// Loop through an object using for...in.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// studinfo.email = 'abhay@gmail.com'

// for (const key in studinfo) {
//   console.log(key,'=',studinfo[key]);
  
// }



// Count the number of keys in an object.
// let studinfo = {
//   name: 'Abhay',
//   age: 21,
//   city: 'Lucknow'
// }
// studinfo.email = 'abhay@gmail.com'

//   let keycount = Object.keys(studinfo).length
//   console.log(keycount);
  