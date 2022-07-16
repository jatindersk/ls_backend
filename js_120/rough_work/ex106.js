function objectsEqual(obj1, obj2) {
  let arr1 = Object.entries(obj1);
  let arr2 = Object.entries(obj2);

  if (arr1.length !== arr2.length) return false;

  for (let key in obj1) {
    if (!obj2[key]) return false;
    else if (obj1[key] !== obj2[key]) return false;
  }

  return true;
}

console.log(objectsEqual({a: 'foo'}, {a: 'foo'}));                      // true
console.log(objectsEqual({a: 'foo', b: 'bar'}, {a: 'foo'}));            // false
console.log(objectsEqual({}, {}));                                      // true
console.log(objectsEqual({a: 'foo', b: undefined}, {a: 'foo', c: 1}));  // false