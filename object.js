/* var obj = {
    name: 'Akshay',
    surname: 'Malthane',
    age: 30,
    Hobbies: ['Guitar', 'Cricket'],
    dream: function() {
        return 'Construction'
    },
    fullname: function() {
        return this.name + ' '+ this.surname
    },
    Living : {
        city : 'Amravati',
    }
} */

// console.log(obj.dream());
// console.log(obj.name);
// console.log(obj.Hobbies[0]);
// console.log(obj.dream());
// console.log(obj.fullname());
// console.log(obj.Living.city);    // reading object

// var person = new Object();              // object literal with new keyword
// person.fname = 'Akshay';
// person.Lname = 'Malthane';
// console.log(person.fname);

// let obj2 = [                              // Array of object
//     { name: "akshay", age: 29 },
//     { name: "Dead", age: 25 },
//     { name: "roy", age: 26 },
//   ];

// for (i=0; i<obj2.length; i++) {
//   console.log(obj2[i].name+ ' ' +obj2[i].age);   // reading array of object
// }

// let x = obj2.forEach(element => {
//   console.log(element.name);
// });
//------------------------------------------------------------------------------------------
/* var obj = {
    bakery1: {
      small: {
        name: "Small cookie",
        price: 0.75
      },
      large: {
        name: "Large cookie",
        price: 3.00
      }
    },
  }; */

//    const {bakery1: {small : {price}}} = obj    // Destructring from es6
//    console.log(price);

//   const {bakery1: {large: {name}}} = obj    // Destructring from es6
//   console.log({name});

// console.log(Object.keys(obj));
// console.log(Object.values(obj));
// console.log(Object.entries(obj));

//--------------------------------------------------------------------------------------------------

// Converting obj into array by using 'entries' method
// Converting array into obj by using 'fromEntries' method

// Removing null and Undefined from an object

// let obj = {
//   a: "Akshay",
//   b: null,
//   c: undefined,
//   d: "Malthane",
// };

// let x = Object.entries(obj).filter(([_, val]) =>  // undescore is an key and val is value
//     val !=null                                   // putting condition that val must not containt null
// )
// let y = Object.fromEntries(x)                   // converting array into obj by using 'fromEntries'
// console.log(y);
//------------------------------------------------------------------------------------------------------
// Converting obj into string and vice versa //

//  let y = { name: "akshay", age: 29}           // convert object to string
// const x = JSON.stringify(y)
// console.log(x);

// const z = JSON.parse(x);                  // String to Object
// console.log(z);

//------------------------------------------------------------------------------------------------------
//** For in **//

// let obj2 = {
//     a: 'akshay',
//     b: 'malthane',
//     c: '007'
// }
// for (let i in obj2) {                // it itrate on key in object and itrate on index in array
//     console.log(i);
// }
//------------------------------------------------------------------------------------------------------
/* let y = { name: "akshay", age: 29, job: 'Software', no: 8149 }
let count = 0;
for (let i in y) {                    // Getting count of keys/property frm object
    count++
}
console.log(count); */

// let x = Object.values(y).length
// console.log(x);
//------------------------------------------------------
/* let y = { name: "akshay", age: 29}
let x = { job: 'Software', no: 8149}

const a = Object.assign(y,x)               // Merge of 2 object
console.log(a); */
//------------------------------------------------------------------------------------------------------
// REMOVE DUPLICATE FROM OBJECT
// let obj2 = [
//   { name: "akshay", age: 29 },
//   { name: "vaish", age: 25 },
//   { name: "akshay", age: 29 },
// ];


/* let b = obj2.filter((value, index, array) =>
index === array.findIndex(t => t.name === value.name))       // Using Filter
console.log(b); */

// fiilter takes 3 arguments. first is current ele of array, second index
// third is orignal array

/* let unique = [...obj2.reduce((acc, curr) =>
  acc.set(curr.name, curr)                                  // Using Reduce and map
, new Map()).values()]
console.log(unique); */

//------------------------------------------------------------------------------------------------------

// Another ex of removing duplicate object from array 
/* books = [
  { title: "C++", author: "Bjarne" },
  { title: "Java", author: "James" },
  { title: "Python", author: "Guido" },
  { title: "Java", author: "James" },
];

let newArray = [];

let uniqueObject = {};

for (let i in books) {

  // Extract the title
  objTitle = books[i]['title'];

  // Use the title as the index
  uniqueObject[objTitle] = books[i];
}
// Loop to push unique object into array
for (i in uniqueObject) {
  newArray.push(uniqueObject[i]);
}
// Display the unique objects
console.log(newArray);
 */
//------------------------------------------------------------------------------------------------------

// let obj = { name:'akshay'}
// let obj2 = obj                    // object isnt cloning here, insted reference is clonning
// obj2.name = 'Vaish'              // thats y orignal obj get affected
// console.log(obj);

// let obj = { name:'akshay'}
// let obj2 = {...obj}             // using spred operator we are clonning obj
// obj2.name = 'Vaish'
// console.log(obj);
//------------------------------------------------------------------------------------------------------