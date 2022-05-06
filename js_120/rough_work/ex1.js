//  Context Loss
//  1. Method Copying

// function repeatSelf(func) {
//   func();
//   func();
// }

// function test() {
//   let person = {
//     name: 'jatinder',
//     age: 30,
//     introduce: function () {
//       console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//     },
//   };

//   repeatSelf(person.introduce);
// }

// test();

//  Solution 1:
//  supply the execution context as the second parameter to
//  repeatSelf function

// function repeatSelf(func, context) {
//   func.call(context);
//   func.call(context);
// }

// function test() {
//   let person = {
//     name: 'jatinder',
//     age: 30,
//     introduce: function () {
//       console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
//     },
//   };

//   repeatSelf(person.introduce, person);
// }

// test();

//  Solution 2:
//  use the bind method

function repeatSelf(func, context) {
  func.call(context);
  func.call(context);
}

function test() {
  let person = {
    name: 'jatinder',
    age: 30,
    introduce: function () {
      console.log(`My name is ${this.name} and I'm ${this.age} years old.`);
    },
  };

  repeatSelf(person.introduce.bind(person));
}

test();