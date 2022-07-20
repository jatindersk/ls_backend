// // function Super(arg) {}

// // Super.prototype.baz = function(char) {
// //   console.log(`This is Super baz${char}`);
// // };

// // function Sub(arg) {
// //   Sub.superclass.call(this, arg);
// // }

// // Sub.superclass = Super.constructor;
// // Sub.prototype = Object.create(Super.prototype);
// // Sub.prototype.constructor = Sub;

// // Sub.prototype.baz = function(char) {
// //   Sub.superclass.foo.call(this, char);
// // };

// // let arr1 = new Array(1, 2);
// // console.log(arr1.constructor === Array);

// let str1 = new String('name');
// let str2 = new str1.constructor('duplicate');
// console.log(str2);

// console.log(str1.constructor === str2.constructor);
// console.log(str2.constructor);

function createFurniture() {}

let chair = new createFurniture();
console.log(Object.getOwnPropertyNames(chair));

console.log(Object.getOwnPropertyNames(Object.getPrototypeOf(chair)));