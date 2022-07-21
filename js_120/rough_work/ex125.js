// let Human = {
//   getName() {
//     return this.name;
//   },

//   getAge() {
//     return this.age;
//   }
// };

// let Person = Object.create(Human);
// Person.getInfo = function() {
//   return `Hi! My name is ${this.getName()} and my age is ${this.getAge()}.`;
// };

// let mark = Object.create(Person);
// mark.name = 'Mark';
// mark.age = 20;

// console.log(mark.getInfo());

// function Human() {}

// Human.prototype.getName = function() {
//   return this.name;
// };

// Human.prototype.getAge = function() {
//   return this.age;
// };

// function Person(name, age) {
//   this.name = name;
//   this.age = age;
// }

// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;

// Person.prototype.getInfo = function() {
//   return `Hi! My name is ${this.getName()} and my age is ${this.getAge()}.`;
// };

// let mark = new Person('Mark', 20);
// console.log(mark.getInfo());

class Human {
  getName() { return this.name };
  getAge() { return this.age };
}

class Person extends Human {
  constructor(name, age) {
    super();
    this.name = name;
    this.age = age;
  }

  getInfo() {
    return `Hi! My name is ${this.getName()} and my age is ${this.getAge()}.`;
  }
}

let mark = new Person('Mark', 20);
console.log(mark.getInfo());