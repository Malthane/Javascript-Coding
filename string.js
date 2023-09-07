/* function myFunction() {
  let text = 'Please visitInitiateFirst!';
 let textReplace =text.replace("InitiateFirst","Broadcom");
    console.log(text);
    console.log(textReplace);                    // replace method in js
} 
myFunction();
console.log(text);
console.log(textReplace); */
//--------------------------------------------------------------------------------------
    
/* const a = [1, 2, 3];
const b = [4, 5, 6];
const z = [...a, ...b];
console.log(z)     */                           // addition by using ...
//--------------------------------------------------------------------------------------

/* const fruits = ["Pune", "Mumbai", "Hyderabad", "Bengaluru"]; 
let text = fruits.join(" and ");                             // join method in hs
console.log(text);  */
//--------------------------------------------------------------------------------------

/* let text1 = "Visit Pune!"; 
let n = text1.search("Pune");                               // search method in js
console.log(n); */
//--------------------------------------------------------------------------------------

/* const array1 = ['a', 'b', 'c'];
const array2 = ['d', 'e', 'f'];

let newA = array1.concat(array2)      //CONCAT method
console.log(newA); */

// const array1 = [1, 4, 9, 16];
// let val = array1.map(x => x*2)      // Map in js
// console.log(val);

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];   // Pop - removed last element
// let val = plants.pop()
// console.log(plants);

// const p = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// let p2 = p.push('hey')                                                    // push - add last element
// console.log(p);

// const p3 = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// let p4 = p3.toString()                                                    // convert array into string
// console.log(p4);

// const plants = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];   // Shift - removed first element
// let val = plants.shift()
// console.log(plants);

// const plant = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// let va = plant.unshift('aalu')                                                  // UnShift - add first element
// console.log(plant);

// const plant = ['broccoli', 'cauliflower', 'cabbage', 'kale', 'tomato'];
// let v = plant.join('-')      // join - it convert array into string but in additions we can give operators
// console.log(v)

// const array1 = ['a','b','c'];                     // Fill - it fill the given value from specific positions
// let val = array1.fill('z',0,1)
// console.log(val);

// const fruits = 'banana apple mango'
// let rep = fruits.replace(/a/g,"z")               // Replacing all 'a' with z
// console.log(rep);

// const fruits = ["Banana", "Orange", "Apple", "Mango"];
// fruits.splice(3,1, "kiwi")                               // delete elemnt at given position
// console.log(fruits);

// const arr1 = [1,2,3,4,5]
// const arr2 = [3,4,5,6,7]
// let a = arr1.filter(val => arr2.includes(val))        // Find common value in 2 arrays
// console.log(a);

// let x = 'Akshay is ugly guy'
// let z = x.split('ugly').join('good')                 // Occurrence of String
// console.log(z);

// let str = 'hi im javascript'
// let n = str.slice(0,5)
// let v = n + " " + str.split(" ").pop().toUpperCase()        // MAKE LAST WORD UPPERCASE
// console.log(v);


// let namez = 'akshay' 
// let nam = namez.charAt(0).toUpperCase() + namez.slice(1)    // MAKE FIRST LETTER UPPERCASE 
// console.log(nam);


// let namez = 'akshay'
// let c = namez.slice(0,5) + namez.charAt(5).toUpperCase()     // MAKE LAST LETTER UPPERCASE 
// console.log(c);


// ar = ['A','B','C','D']                                    // FIND LAST ELEMENT FROM ARRAY
// // let a = ar[ar.length-1]
// // let a = ar.slice(-1).join()
//  let a = ar.at(-1)
// console.log(a);
//--------------------------------------------------------------------------------------------

// Capitalize the first letter of each word

// const inputString = 'capitalize the first letter';
//   // Split the input string into an array of words
//   const words = inputString.split(' ');
//   // Capitalize the first letter of each word and store them in a new array
//   const capitalizedWords = words.map(e => e[0].toUpperCase() + e.slice(1));
//   // Join the capitalized words back into a single string
//   const resultString = capitalizedWords.join(' ');
// console.log(resultString);

//--------------------------------------------------------------------------------------------