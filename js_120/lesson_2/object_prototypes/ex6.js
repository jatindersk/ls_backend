//  We can create an object that has no prototype
//  by explicitly setting the prototype to null

let foo = Object.create(null);

//  We can determine that the object has a prototype
//  by using the static method of Object constructor
//  i.e getPrototypeOf( <object name> ) and checking
//  whether the returned values is null or not

console.log(Object.getPrototypeOf(foo));