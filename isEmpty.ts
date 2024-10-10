// Given an object or an array, return if it is empty.

//     An empty object contains no key-value pairs.
//     An empty array contains no elements.

// You may assume the object or array is the output of JSON.parse.
// Example 1:

// Input: obj = {"x": 5, "y": 42}
// Output: false
// Explanation: The object has 2 key-value pairs so it is not empty.

// Example 2:

// Input: obj = {}
// Output: true
// Explanation: The object doesn't have any key-value pairs so it is empty.

// Example 3:

// Input: obj = [null, false, 0]
// Output: false
// Explanation: The array has 3 elements so it is not empty.

function isEmpty(obj: object | any[]):boolean {
  if (Array.isArray(obj) && obj.length === 0) return true;
  if (Object.keys(obj).length === 0) return true; 
  else return false; 
}

console.log(isEmpty([])); 
console.log(isEmpty({ "x": 5, "y": 42 })); 
console.log(isEmpty({}))
console.log(isEmpty([null, false, 0])); 

//your typing here is incorrect. Look it up. Your solution is amazing tho! Great work <3