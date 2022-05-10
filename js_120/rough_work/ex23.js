// class Human {
//   myName() {
//     return this.name;
//   }

//   myAge() {
//     return this.age;
//   }
// }

// class Person extends Human {
//   toString() {
//     return `My name is ${this.name} and age is ${this.age}`;
//   }
// }

// let jatin = new Person();
// jatin.name = 'Jatinder';
// jatin.age = 30;
// console.log(jatin.myName());
// console.log(jatin.myAge());
// console.log(jatin.toString());

// function Human() {}
// Human.prototype.myName = function() {
//   return this.name;
// };
// Human.prototype.myAge = function() {
//   return this.age;
// };

// function Person() {}
// Person.prototype = Object.create(Human.prototype);
// Person.prototype.constructor = Person;

// Person.prototype.toString = function() {
//   return `My name is ${this.name} and my age is ${this.age}`;
// };

// let jatin = new Person();
// jatin.name = 'Jatinder Singh Koranga';
// jatin.age = 30;
// console.log(jatin.myName());
// console.log(jatin.myAge());
// console.log(jatin.toString());

//  Object Inheritance / Prototype Inheritance / Prototypal Delegation

let human = {
  myAge: function() {
    return this.age;
  },

  myName: function() {
    return this.name;
  }
};

let person = Object.create(human);
person.toString = function() {
  return `My name is ${this.name} and my age is ${this.age}.`;
};

let jatin = Object.create(person);
jatin.name = 'Jatinder Singh Koranga';
jatin.age = 30;
console.log(jatin.myAge());
console.log(jatin.myName());
console.log(jatin.toString());