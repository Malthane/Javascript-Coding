
/* for (let i= 0; i < 5; i++) {         //output 0,1,2,3,4
    setTimeout(function() {
        console.log(i);
    }, i * 1000)
} */

/* for (var i = 0; i <5; i++) {          // output 5,5,5,5,5
    setTimeout((function() {
        console.log(i);
    }

    ), i * 1000)
} */

//-----------------------------------------------------------------------------
// Clouser //

/* var c = 3
function outer(b) {
    let a = 10;
    function inner() {
        sum = a + b + c
        console.log(sum);
    }
    return inner
}
let lex = outer(5)
lex() */

//------------------------------------------------------------------------------------------
//** PASS BY VALUE AND PASS BY REFERENCE **//

/*  let myName = 'Akshay';      // pass by Value example, where value is passed
let sirName = myName;
 myName = 'Vaishnavi'
console.log(myName);

let obj = {                // pass by reference
  name: 'akshay',
  age: 30
}
let obj2 = obj
obj.name  = 'vaishnavi'
console.log(obj); */
//------------------------------------------------------------------------------------------

/* var fun
console.log(fun);            // hoisting
var fun = 'akshay' */
//------------------------------------------------------------------------------------------
/* let a = 'hi';
function hello() {       // inner function can accesss to outer var
  let a = 'who'
  let b = 'how'
  console.log(a);
}
hello()
console.log(a); */
//------------------------------------------------------------------------------------------

// PROMISES //

/* let data = new Promise((resolve, reject) => {
  setTimeout(() => {
    x = 1;
    y = 2;
    if (x == y) {
      resolve("Solved");
    } else {
      reject("Rejected");
    }
  }, 1000);
});

data
  .then((e) => {
    console.log(e);
  })
  .catch((e) => {
    console.log(e);
  }); */
//--------------------------------------------------------------------------------------

// ASYNC AWAIT //

 /* const pro1 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 1 resolved')
    // reject('promise 1 rejected')
  },5000)
})

const pro2 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 2 resolved')
    // reject('promise 2 rejected')
  },3000)
})

const pro3 = new Promise((resolve, reject) => {
  setTimeout(() => {
    resolve('promise 3 resolved')
    // reject('promise 3 rejected')
  },1000)
})

// We have created 3 promises which are suppose to execute 3,2,1 bcz of their timeout
// but we want to execute them 1,2,3 although pro1 has higher timeout than others
// this is where async await comes into picture, where we want to execute function as per our need

pro1.then((e) => {
  console.log(e);
})
pro2.then((e) => {
  console.log(e);
})
pro3.then((e) => {
  console.log(e);
})
// above code is promise code where we are geting promise value by using then method

async function getData() {
  const prom = await pro1
  const prom2 = await pro2
  const prom3 = await pro3
  console.log(prom);
  console.log(prom2);
  console.log(prom3);
}
getData() */
//--------------------------------------------------------------------------------------------

// CALL & APPLY //

// Call and apply we use when we want to access the value of one obj into another
 /*  let obj = {
  name: 'akshay',
  fun: function(age) {
    console.log(`my name is ${this.name} my city is ${this.city} age is ${age}`);
  }
}
let obj2 = {
  name:'dead',
  city : 'amravati'
}
obj.fun.call(obj2, 30)                   // passing argument separately
obj.fun.apply(obj2, [35, 'peter']) */      // passing argument as an array
//----------------------------------------------------------------------------------------------

// CURRYING //

/* function addition(a) {
  return function (b) {
    return function (c) {
      return a + b + c
    }
  }
}
let result = addition(2)(3)(4)  // passing argument at a time
console.log(result); */
//-----------------------------------------------------------------------------
// Guess the Output

/* var a = 20;
function data(e) {
  if (e < 1) {
    return e
  }
  return console.log(e);
}
data(10) */
//-----------------------------------------------------------------------------

// var myName = "dey"
// const obj = {
//   myName: 'akshay',
//   func: function() {
//     let myName = 'ronni'
//     console.log(this);             // this keyword refer current object
//     console.log(myName);          // it will return function value
//     console.log(this.myName);    // this.myName refer obj property not global
//   },
// }
// obj.func()
//-----------------------------------------------------------------------------------------

// var x = 1;
// var x = 4; // overrides previous value
// function hello() {
//   // console.log(x);          // hoisting
//   var x = 3;
//   console.log(x);            // first it find within scope if not found then it searches for a global
// }
// // console.log(y);         // can not access inner function
// hello();
// // console.log(x);        // it has nothing to do with function and scope
//---------------------------------------------------------------------------------------------------

// let num = 0;
// const boo = Boolean(num)                // Convert num into boolean
// console.log(boo);                      // This will print 'true' for non-zero numbers and 'false' for 0

// let num = 3                           // Another way without Boolean operator
// const boo = num !== 0                // if num is not equal to zero then return true otherwise false
// console.log(boo);

// let boo = false;                  // Convert boolean into Number
// const num = Number(boo)          // it will return 1 for true and 0 for false
// console.log(num);

// const str = "21"
// const num = Number(str)              // Convert string into Number
// console.log(num);

// const number = 42; 
// const string = number.toString();    // Convert Number into string
// console.log(typeof(string));

// const str = 'akshay';
// let boo = Boolean(str)              // Convert string into boolean
// console.log(boo);

//---------------------------------------------------------------------------------------------------

// const x = undefined               // == return true bcz value is same which is 0
// console.log(x == null);          // === return false bcz type if diff

// var e = 10;
// function value(e) {
//   if (e < 1) { return e }        // console.log is outside the if block but its inside function block
//   console.log(e);               // so it will get value from argument, if it doesnt find inside function scope
// }                              // then it will get global value
// value(15)

// const ar = [null, ,null]         // Undefine bcz first index has nothing
// console.log(ar[1]);

// const x = !!0                   // single ! return true but double !! return false again
// console.log(x);

// const ar = [1, ,3, null]        // return 4 bcz it count empty space as well
// console.log(ar.length);
//---------------------------------------------------------------------------------------------------
// Object Freez and Seal

// const obj = {
//   name: "akshay",            // in Freez we can not add,delete or modify existing value
//   age: 30
// }
// Object.freeze(obj)
// obj.name = 'Vaish'
// console.log(obj);


// const obj = {
//   name: "akshay",          // in Seal we can modify the value but can not add or delete
//   age: 30 
// }
// Object.seal(obj)
// delete obj.name
// console.log(obj);

//---------------------------------------------------------------------------------------------------