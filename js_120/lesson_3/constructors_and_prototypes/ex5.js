function Ninja() {
  this.swung = true;
}
console.log(Ninja.prototype);

let ninja = new Ninja();

Ninja.prototype = {
  swingSword: function() {
    return this.swung;
  },
};

// console.log(ninja.swingSword());
console.log(Ninja.prototype);

//  It raises an TypeError exception.
//  This is because on line 7, we reassigned the prototype
//  property of Ninja constructor to reference a new
//  object.

//  The object ninja created using the constructor Ninja on line 5
//  refers to the original prototype object. The original prototype
//  object did not have the swingSword method.