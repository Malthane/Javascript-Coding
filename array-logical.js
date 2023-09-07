/* const ar = [1,2,3,4,5]
const result = ar.sort(() => Math.random() - 0.5)         // Shuffle the Array
console.log(result); */
// ------------------------------------------------------------------------------------

// Find the frequency or Occurance of elements in array
/* 
const array1 = ['ram', 'akshay', 'sita', 'ram', 'sita'];

function count(p) {
    var count = {};
    p.forEach(item => {
        if (count[item]) {
            count[item]++
        } else {
            count[item] = 1
        }
    });
     return count;
}
console.log(count(array1)); */

// ------------------------------------------------------------------------------------

// Grouping Even and Odd numbers into separate arrays.

/* const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const evenArray = []
const oddArray = []

let even = numbers.filter(e =>  {
    if (e % 2 === 0) {
        evenArray.push(e)
    }
    if (e % 2 !== 0) {
        oddArray.push(e)
    }
})
console.log(evenArray);
console.log(oddArray); */
// ------------------------------------------------------------------------------------

// Group items on the basis of age of given array of object
/* const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 },
  ]; */

// ------------------------------------------------------------------------------------
// Group items on the basis of age of given array of object

/* function groupByAge(objectsArray) {
    return objectsArray.reduce((grouped, obj) => {
      const age = obj.age;
      if (!grouped[age]) {
        grouped[age] = [];
      }
      grouped[age].push(obj);
      return grouped;
    }, {});
  }
  const people = [
    { name: 'Alice', age: 25 },
    { name: 'Bob', age: 30 },
    { name: 'Charlie', age: 25 },
    { name: 'David', age: 30 },
    { name: 'Eve', age: 35 },
  ];
  const groupedByAge = groupByAge(people);
  console.log(groupedByAge);
 */

// ------------------------------------------------------------------------------------

// Find the pairs of array element for which sum is equal to given target value (Two Sum Problem)

/* const arr = [2, 7, 11, 15, 3, 6, 8];
const target = 9;

const numIndex = {};
const pairs = [];

for (let i = 0; i < arr.length; i++) {
  const complement = target - arr[i];
  if (numIndex[complement] !== undefined) {
    pairs.push([arr[i], complement]);
  }
  numIndex[arr[i]] = i;
}
console.log(pairs); */
// ------------------------------------------------------------------------------------
