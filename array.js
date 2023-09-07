// var arr = [
//   ["akshay", 18, "MCA"],
//   ["Vaishnavi", 25, "BCA"],
//   ["roy", 22, "BE"],
// ];

// console.log(arr[0][2])    // this is how we read from array

// console.log(arr[1]?.[1]);    // ? used as a optional chaining, show if present

// let x = arr.forEach((val)=> {   // read all element from an array
//     console.log(val);
//   })

// for (i = 0; i<arr.length; i++) {    // this is how we read from array
//     console.log(arr[i]);           // for inner array j<=arr[i].length
// }

// arr[2][0] = 'Vaishnavi';           // modify an array
// console.log(arr);

// const arr1 = [1,2,3]              // pushing 4 into array
// arr1.push(4)
// console.log(arr1);

// var user = new Array();            // Array literal with new keyword
// user[0] = 'Roy';
// console.log(user[0]);
//--------------------------------------------------------------------------------------------------------
// // REMOVE DUPLICATE FROM ARRAY //
// const a = [1, 2, 4, 1, 6, 8, 4];        // 1st  Method by using for loop
// const a = ['akshay', 'vaish', 'vaish']

/* let b = [];
for (i of a) {
  var unique = true;
  for (j of b) {
    if (i == j) {
      unique = false;
    }
  }
  if (unique) {
    b.push(i);
  }
}
console.log(b); */

// let b = [...new Set(a)]           // 2nd Method by using set method
// console.log(b);

// let c = a.filter((currentValue, index,array) => array.indexOf(currentValue)== index)   // 3rd by using filter method
// console.log(c)
//---------------------------------------------------------------------------------------------------------------
// ** SORT ARRAY ** //

// var v = [1, 7, 2, 8, 3, 4, 5, 0, 9];
// var v = ["c", "v", "b", "a", "z", "p"];

//  for (i=0; i<v.length; i++) {         // 1st method using loop
//   for (j=0; j<i; j++) {
//     if (v[i] > v[j]) {
//       x = v[i];
//       v[i] = v[j];
//       v[j] = x
//     }
//   }
// }
// console.log(v);

// let sortval = v.sort((a,b) => (a -b))          // 2nd method using sort method
// console.log(sortval);                         // this works for number

// let val = v.sort((a, b) => b.localeCompare (a))    // this works for alphabate char
// console.log(val);

//---------------------------------------------------------------------------------------------------------------
//** MAKE EMPTY ARRAY **//

// var arrayList = ["a", "b", "c", "d", "e", "f"];

// arrayList = []
// arrayList.length = 0
//  arrayList.splice(0,arrayList.length)
//  console.log(arrayList);

//---------------------------------------------------------------------------------------------------------------

//**/ Extract data from nested array **//

//  const ary = [[[[[0]], [1]], [[[2], [3]]], [[4], [5]]]];

/*  const ar = []
 for(i=0; i<ary.length; i++) {
  Array.isArray(ary[i]) ? ary.push(...ary[i]) : ar.push(ary[i])
 }
 console.log(ar.sort()); */

/* const result = [];
 for(let i=0; i<ary.length; i++) {                // using for loop
  const item = ary[i];
  if(Array.isArray(item)) {
    ary.push(...item);
  } else {
    result.push(item);
  }
}
console.log(result); */

/* let arr3 = [[4,5],[2,3], [1,2,[7,8]]]        // using 'Flat' method
let t = arr3.flat(Infinity)
console.log(t); */

//---------------------------------------------------------------------------------------------------------------

//** FIND LARGEST AND SMALLET NO FROM ARRAY **//

// let p = [2,4,6,8,1]

/* let ar = [0, 30, 2, 3, 4, 5, 20 , 50, 1,];                   // Using foor loop
let min = ar[0];
let max = 0;
for (let i = 0; i < ar.length; i++) {
  if (ar[i] < min) {
      min = ar[i];
  }
  if (ar[i] > max) {
      max = ar[i];
  }
}
console.log(max, min); */

// console.log(Math.min(...p));
// console.log(Math.max(...p));

//---------------------------------------------------------------------------------------------------------------

//** For of loop **/

/* let arrz = ['akshay', 'dilip', 'malthane']   // it itrate over elements just like normal loop
for (let i of arrz) {
    console.log(i);
} */
//---------------------------------------------------------------------------------------------------------------
//** Find wheather Array is an array or not */

// console.log(Array.isArray([]));
// console.log([] instanceof Array);
//---------------------------------------------------------------------------------------------------------------
//** Convert Array into String **//

// let arr4 = [1, 2, 3, 4];

// let arr5 = ["akshay", "malthane"];
// let StringVal = arr5.toString();      // converting array into string
// console.log(StringVal);

// let spl = StringVal.split(" ");        // converting string to array but it can also give complete word
// console.log(spl);

// let text = "ABC"
// let str = Array.from(text)           // converting string to array
// console.log(str);

//---------------------------------------------------------------------------------------------------------------
//** Convert array into Object **//

// const ary2 = [1,2,4,5]
// const ary3 = ['akshay', 'malthane']
// const newArr = Object.assign({}, ary3)
// console.log(newArr);
//---------------------------------------------------------------------------------------------------------------

// Find second largest no from an array
// let arr = [1, 3, 5, 6, 8, 2, 3, 9];


// let x = arr.sort((a,b) => a-b).reverse()       // inbuild method
// console.log(x[1]);

/* let high = -Infinity;
let secondHigh = -Infinity;

for (let i = 0; i < arr.length; i++) {          // for loop
    if (arr[i] > high) {
        secondHigh = high
        high = arr[i]
    }
}
console.log(secondHigh); */
//----------------------------------------------------------------------------------------------------------

 // Addition of elements in an array

// let ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];

// const x = ar.reduce((accum, curr) => accum + curr)
// console.log(x);

/* var add = 0
for (i=0; i<ar.length; i++) {       
    add += ar[i]
}
console.log(add); */
//-----------------------------------------------------------------------------
/*  var ar = [2, 3, -1, 5, 7, 9, 10, 15, 95];
var n = ar.length
 var sum = 0
 for (i=0; i<n; i++) {        // get avarage of elements from an array
    sum += ar[i]
 }
 let data = sum/n
 console.log(data); */
//-----------------------------------------------------------------------------
/* let ar = [-5, 10, -3, 12, -9, 5, 99, 0, 1];
let value = ar[0];
for (i=0; i<ar.length; i++) {         // Find largest no from array
    if (ar[i] > value) {
        value = ar[i]
    }
}
console.log(value); */
//-----------------------------------------------------------------------------

// Get count of Duplicate value form an array or string //

// const str = "small big big medium small"

/* const empAr = []
str.split(" ").forEach(e => empAr[e] = (empAr[e] || 0) + 1)
console.log(g); */

//--------------------------------------------------------------------------------------

/* var x = [55,88]
const arrayReduce = [15, 16, 17, 18, 19];
let red = arrayReduce.reduce((prev, curr)=> {
  return prev + curr                // reduce method with current and previous value
})
console.log(red); */

//--------------------------------------------------------------------------------------
// Splice //
// let values = ['Akshay', 'Dilip', 'Malthane']    // it takes 3 arguments. 1st is index, 2nd is delete, 3rd is new string
// // let x = values.splice(3, 0, 'Vaishnavi')    // added new value at the end of an array
// // let y = values.splice(0, 1, 'AKSHAY')      // deleted old value, updated new value
// // let z = values.splice(2, 1)               // deleted the element
// console.log(values);                        // new array alwys return empty if we dont delete anything
//---------------------------------------------------------------------------------------------------

// GET duplicate from array //

// let array = [6, 9 ,5, 15, 6, 13, 22, 9, 11,15];
// let array = ['akshay','ram','akshay','rey','dead', 'rey']
// const x = "akshay ram akshay rey dead rey"

/* const array = x.split(" ")
let ar = []
for (i=0; i<array.length; i++) {
  for (j = i+1; j < array.length; j++) {
    if (array[i] === array[j]) {
      ar.push(array[i])
    }
  }
}
console.log(ar); */
//---------------------------------------------------------------------------------------------------
// REMOVE NEGATIVE ADN PERFORM ADDITION //

// let arr5 = [-3,5,1,3,2,-10];

// let num = 0
/* 
for (i=0; i<arr5.length; i++) {
  if (arr5[i] > 0) {
    num += arr5[i]
  }
}
console.log(num); */
//---------------------------------------------------------------------------------------------------
// REMOVE NULL AND UNDIFINE AND DO ADDITION //

/* const arr = [23,566,null,90,-32,undefined,32,-69,88,null];
let sum = arr.reduce((prev, curre) => {
  return prev + (curre || 0)
})
console.log(sum); */

//---------------------------------------------------------------------------------------------------
// PRINT ONLY TRUTHY VALUE FROM AN ARRAY //

/* var allValues = [10, 0, false,20,15 ,'', NaN, undefined, 45,null]
Ar = []
allValues.forEach(e => (e ? Ar.push(e) : e))
console.log(Ar);
 */
//---------------------------------------------------------------------------------------------------

// CONVERT NUMBER INTO AN ARRAY //

// var num = 235345

// var myArr = String(num).split('').map(e => Number(e))

// console.log(myArr)
// console.log(typeof(myArr));
//---------------------------------------------------------------------------------------------------

/*  const arr = [23,566,null,90,-32,undefined,32,-69,88,null];

 let val
 const add = arr.reduce((prev, curr) => {
  curr && curr >0 ? console.log(curr) : curr
  return prev + curr
 }, 0)
 console.log(add) */
//---------------------------------------------------------------------------------------------------
// Clone Array //

// let clone = [1, 2, 3, 4, 5]

// const dup = clone.map(e => e)
//  const dup1 = clone.concat(dup)
//  console.log(dup);

// let y = [...clone]
// let z = clone.concat(y)
// console.log(z);
//-------------------------------------------------------------------------------------------------

// const array = [10, 20, 30, 40];
// const result = array.map((num) => num / 2).filter((num) => num >= 15);
// console.log(result);                  // // Return value which is greter than 15 //
//-------------------------------------------------------------------------------------------------
/* let counter = 0;
for (var i = 1; i <= 10; i++) {
  counter+= i;
}
console.log(counter);
console.log(i); */
//-------------------------------------------------------------------------------------------------

// COMPARE TWO ARRAY //

/* ar1 = [1,2,3]
ar2 = [1,2,3]

for(i=0; i<ar1.length; i++) {
  if (ar1.length !== ar2.length || ar1[i] !== ar2[i]) {
     value = false
  } else {
    value = true
  }
}
console.log(value); */
//-------------------------------------------------------------------------------------

// Convert 2 arrays into one obj

/* const array1 = ['ram', 'akshay', 'sita'];
const array2 = [10, 20, 30];

if (array1.length === array2.length) {
    let obj = array1.reduce((accum, key, index) => {
        accum[key] = array2[index]
        return accum
    }, {})
    console.log(obj);
} else {
    console.log("array length is diff");
} */
//----------------------------------------------------------------------------------------