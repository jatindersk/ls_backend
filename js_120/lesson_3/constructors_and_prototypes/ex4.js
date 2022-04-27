function Ninja() {
  this.swung = true;
}

let ninja = new Ninja();

Ninja.prototype.swingSword = function() {
  return this.swung;
};

console.log(ninja.swingSword());  // true

//  This is because the object `ninja` created by constructor
//  `Ninja` inherites the method defined on constructor's
//  prototype. Further, as we are using a method call syntax
//  to access `swingSword` method, the context (value of this)
//  inside the method will reference the object that invoked it
//  i.e the `ninja` object.