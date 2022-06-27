// let argArray = [7, 18, 9];

// console.log(Math.max.apply(Math, argArray));

function Person(name, args) {
  this.name = name;
  this.arguments = args;
}

//  new Person.apply(Person, argArray);
//  let person = (new Person()).apply(Person, argArray);

Function.prototype.new = function() {
  let arguments = args;
  let constructor = this;

  function Fake(arguments) {
    constructor.apply(constructor, arguments);
  }
  Fake.prototype = constructor.prototype;

  return new Fake(arguments);
};

Function.prototype.applyNew = function() {
  return this.new.apply(this, args);
}

let children = [new Person('Ben'), new Person('Dan')];
let args = ['Bob'].concat(children);
let bob = Person.applyNew(args);

console.log(bob.name);