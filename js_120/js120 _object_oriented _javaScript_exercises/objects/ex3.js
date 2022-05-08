//  algo:
//  - use Object.entries method on both ojects and check
//  whether the length of the arrays generated is same ?
//  - if not then return false

//  - if yes, then do the following
//  - extract all the keys from both objects and check
//  whether every key exists in obj1 exists in obj2
//  - If yes check for values, else return false

//  - extract all the values from both objects and check
//  whether every value exists in obj1 exists in obj2
//  - If yes return true, else return false

// function objectsEqual(obj1, obj2) {
//   if (obj1 === obj2) return true;

//   let pairsObj1 = Object.entries(obj1);
//   let pairsObj2 = Object.entries(obj2);

//   if (pairsObj1.length !== pairsObj2.length) return false;

//   let keys1 = Object.keys(obj1);
//   let keys2 = Object.keys(obj2);

//   if (!(keys1.every(key => keys2.includes(key)))) return false;

//   let values1 = Object.values(obj1);
//   let values2 = Object.values(obj2);

//   if (!(values1.every(val => values2.includes(val)))) return false;
//   else return true;
// }

function objectsEqual(a, b) {
  if (a === b) {
    return true;
  }

  return (keysMatch(a, b) && valuesMatch(a, b));
}

function keysMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();
  let bKeys = Object.getOwnPropertyNames(b).sort();

  if (aKeys.length !== bKeys.length) {
    return false;
  }

  return aKeys.every((key, index) => {
    return key === bKeys[index];
  });
}

function valuesMatch(a, b) {
  let aKeys = Object.getOwnPropertyNames(a).sort();

  return aKeys.every(key => a[key] === b[key]);
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false
console.log(objectsEqual({a: 'foo', b: {name : 'jat'}}, {a: 'foo', b: {name : 'jat'}}));  // false

let obj = {name: 'kor'};
console.log(objectsEqual({a: 'foo', obj}, {a: 'foo', obj}));  // true