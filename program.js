// ** Fibonacci program **//

/* let num = 100;
let a = 0;
let b = 1;
let fn = a + b;
while (fn < num) {
    console.log(fn);
    fn = a + b;
    a = b
    b = fn;
} */
// -------------------------------------------------------------------------------------------------
// ** Prime or Composite Numbers **//

// Prime no is the no which can not be divided by any no except 1 or that no itself
// Composite no is divied by any no

/* let compNum = 8;
var prime = true
for (let i=2; i<compNum; i++) {
  if (compNum % i == 0) {
    prime = false
  }
}
if (prime == true) {
  console.log(`${compNum}` + " " + 'is prime no');
} else {
  console.log(`${compNum}` + " " + 'is not a prime no');
}
 */

//----------------------------------------------------------------------------------------------------
// Factorial program

/* var fact = 5
var x = 1
for(fact; fact >= 1; fact--){
    x = x * fact
}
console.log(x); */
//---------------------------------------------------------------------------------------------------

//Reverse string

// let x = "akshay";

/* let k = x.split('').reverse().join()          // Using inbuild method
console.log(k); */
 
/* let rev = '';
for(let i = x.length -1; i>=0; i-- ) {          // Using for loop
    rev += x[i]
}
console.log(rev); */

//------------------------------------------------------------------------------------------
// ANAGRAM //


/* function ana(a, b) {
  // checking length of array if its not same then it can never be anagram
  if (a.length !== b.length) {                 
    return false
  }
  // declaired empty object where we will get count of each charactor from a
  let obj = {}
  // by using loop we are getting count of char from word
  for (i of a) {
    obj[i] = (obj[i]|| 0) +1
  }
  // checking that if charactor from a is present in b or not
  for (j of b ) {
    if (!obj[j]) {
      return false
    }
    // if present then do minus
    obj[j] -=1
  }
  return true
}
const check = ana('hello', 'ellho')
console.log(check); */


/* let firstWord = "earth";                                            // inbuild method
let secondWord = "Heart";
const first = firstWord.toLowerCase().split("").sort().join("");
const second = secondWord.toLowerCase().split("").sort().join("");
let ana = first === second ? true : false;
console.log(ana); */

//----------------------------------------------------------------------------------------------
// Table or 7
/* for (i=1; i<=10; i++) {
    let val = "7 * " + i + " = " + 7 * i
    console.log(val);
} */
//---------------------------------------------------------------------------------------------
/* var sum = 0
for (i=11; i<30; i+=2) {          // print odd no which is greater than 11
    sum +=i
}
console.log(sum); */
//-------------------------------------------------------------------------------
// Find Ovwels //

/* const vowel = 'aigregwo'

const vowel = 'aigregwo'
const vowelData = ['a', 'e','i', 'o', 'u']
let countVowel = 0;

for (i of vowel) {
  if (vowelData.includes(i)) {
    countVowel++
  }
}
console.log(countVowel); */


/* function vowel(a) {
  var count = 0
  const vow = ['a', 'e','i', 'o', 'u']
  for (let i of a) {
    if (vow.includes(i)) {
      count ++
    }
  }
  console.log(count);
  return count
}
vowel('aigregwo') */

//----------------------------------------------------------------------------------------------------
// PALINDROME //

/* let palin = 'akshay';
let value = '';
for (i = palin.length-1; i>=0; i--) {         // using For Loop
  value +=palin[i]
}
if (value === palin) {
  console.log('true');
} else {
  console.log('false');
} */

/* let val = 'madam';
let palin = val.split('').reverse().join('')      // using inbuild method
if (palin === val) {
  console.log('true');
} else {
  console.log('false');
} */
//-------------------------------------------------------------------------------------------------
/* let students = [                 // get student name whose math marks is greter than 80
  {
    name: "john",
    marks: {
      language: 83,
      science: 75,
      maths: 60,
    },
  },
  {
    name: "peter",
    marks: {
      language: 63,
      science: 95,
      maths: 80,
    },
  },
  {
    name: "jasmine",
    marks: {
      language: 53,
      science: 77,
      maths: 86,
    },
  },
]; */

// let studName = students.filter((curr) => {             // Using filter
//   if (curr.marks.maths >=80) {
//     console.log(curr.name);
//   }
// })

// let x = students.forEach(e => (e.marks.maths >= 80 ? console.log(e.name) : e))    // using ForEach

// let x = students.map((e) => {
//     if (e.marks.maths >= 80) {                     // using Map
//         console.log(e.name);
//     }
// })

//--------------------------------------------------------------------------------------
// GET total and if score is greter than 60 then it is 'A' grade

/* var students = [['David', 80], ['Vinoth', 77], ['Divya', 88], ['Ishitha', 95], ['Thomas', 68]];

var add = 0
let x = students.map((e) => {
    add += e[1]                    // e[1] is reading first index in array
})
console.log(add);
let val = add/students.length
console.log(val);
if (val > 60) {
    console.log('grade  : A');
} */
//--------------------------------------------------------------------------------------

// Print the name whose age is greter than 40
/* let arr = [
  { name: "aniket", age: 20 },
  { name: "tejaswini", age: 50 },
  { name: "maruthi", age: 40 },
  { name: "amrit", age: 90 },
  { name: "ankita", age: 30 },
]; */

// let person = arr.filter((current) => {
//   if (current.age >= 40) {
//     console.log(current.name);
//   }
// })

// let x = arr.forEach((val) => {
//   if (val.age > 40) {
//     console.log(val);
//   }
// })

//--------------------------------------------------------------------------------------
/* const a = 75;
const b = 80;
const c = 60;

function cal () {
  let sum = a + b + c
  var total = sum/300 * 100
  console.log(total);                                // get Avarage
}
cal() */
//--------------------------------------------------------------------------------------
