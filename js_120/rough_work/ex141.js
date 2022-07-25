let arr = new Array(1, 2, 3);
let arr2 = Array(4);

console.log(arr);
console.log(arr2);

let obj = {
  length: 2,
  0: '1st element',
  1: '2nd element',
  3: '3rd element'
};

console.log(Array.from(obj));

let obj1 = new Object();
console.log(typeof obj1);
console.log(Object.getPrototypeOf(obj1) === Object.prototype);