// // let str = 'jatinder';

// // // Array.prototype.forEach.call(str, char => console.log(char));

// // let result = [].filter.call(str, char => 'aeiou'.includes(char));
// // console.log(result.join('--'));

// // Array.prototype.every = function(callback) {
// //   for (let idx = 0; idx < this.length; idx += 1) {
// //     if (!(callback(this[idx]))) return false;
// //   }

// //   return true;
// // };

// // let obj = {
// //   length: 1,
// //   0: 'firstName',
// //   2: 'lastName',
// // };

// // let arr = Array.from(obj);
// // console.log(arr);

// let strPrim = String('xyz');
// let newStrPrim = String('xyz');

// let strObj = new String('xyz');
// let newStrObj = new String('xyz');

// console.log(strPrim === newStrPrim);
// console.log(strObj === newStrObj);
// console.log(typeof strPrim);
// console.log(typeof strObj);

let date = new Date();
console.log(date.getDay());

let dateOld = new Date(`March 02, 1992`);
console.log(dateOld.getDay());