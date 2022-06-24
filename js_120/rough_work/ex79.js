const arrayFrom = function(obj) {
  let length = obj.length;
  let result = [];

  for (let idx = 0; idx < length; idx += 1) {
    result.push(obj[idx]);
  }

  return result;
};

let result = arrayFrom({0: 'a', 1: 'b', 2: 'c', length: 4});
console.log(result);

console.log(result.hasOwnProperty(3));