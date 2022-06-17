//  We can create an object that doesn't have a prototype
//  by explicitly setting it's prototype property as null.

//  We can check whether the object has a prototype or not
//  by checking whether it uses null as a prototype.

let foo = {
  name: 'jatinder',
};

// Object.setPrototypeOf(foo, null);

console.log(Object.getPrototypeOf(foo) === null);
console.log(Object.getPrototypeOf(foo) === Object.prototype);