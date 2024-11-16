function deepEqual(obj1, obj2) {
  //if they are primitive we can do
  if (obj1 === obj2) return true;
  //if they objects
  const obj1Keys = Object.keys(obj1);
  const obj2Keys = Object.keys(obj2);
  //check length
  if (obj1Keys.length != obj2Keys.length) return false;
  for (let key of obj1Keys) {
    if (!deepEqual(obj1[key], obj2[key])) return false;
  }
  return true;
}

let obj = { here: { is: 'an' }, object: 2 };
// console.log(deepEqual(obj, obj));
// → true
console.log(deepEqual(obj, { here: 1, object: 2 }));
// → false
console.log(deepEqual(obj, { here: { is: 'an' }, object: 2 }));
// → true
