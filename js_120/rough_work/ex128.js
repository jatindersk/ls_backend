// // console.log(['a', 'b', 'c'].hasOwnProperty('1'));

// // let obj = Object.create(null);
// let obj = { length: 9 };
// console.log((Object.prototype).isPrototypeOf(String.prototype));
// console.log(Object.getPrototypeOf(obj) === Object.prototype);
// console.log(obj instanceof Object);

let arrayFrom = function(obj) {
  let length = obj.length;
  let result = [];

  for (let idx = 0; idx < length; idx += 1) {
    result.push(obj[idx]);
  }

  return result;
};

let res = arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 2});
console.log(res);