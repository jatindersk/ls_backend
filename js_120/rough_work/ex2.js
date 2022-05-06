//  Context Loss
//  2. Nested Functions

// let obj = {
//   name: 'Jatinder',
//   age: 30,
//   introudction: function() {
//     [1, 2, 3].forEach(function(num) {
//       console.log(`${num}: My name is ${this.name} and my age is ${this.age}.`);
//     });
//   },
// };

// obj.introudction();

//  ==========================================================================
//  ==========================================================================

//  Solution 1:
//  Use arrow function

// let obj = {
//   name: 'Jatinder',
//   age: 30,
//   introudction: function() {
//     [1, 2, 3].forEach(function(num) {
//       console.log(`${num}: My name is ${this.name} and my age is ${this.age}.`);
//     });
//   },
// };

// obj.introudction();

//  ==========================================================================
//  ==========================================================================

//  Solution 1:
//  Preserve the context to a variable in outer scope

// let obj = {
//   name: 'Jatinder',
//   age: 30,
//   introudction: function() {
//     let self = this;
//     [1, 2, 3].forEach(function(num) {
//       console.log(`${num}: My name is ${self.name} and my age is ${self.age}.`);
//     });
//   },
// };

// obj.introudction();

//  ==========================================================================
//  ==========================================================================

//  Solution 2:
//  Use call or apply methods to bind the context to the method

// let obj = {
//   name: 'Jatinder',
//   age: 30,
//   introudction: function() {
//     function message() {
//       console.log(`My name is ${this.name} and my age is ${this.age}.`);
//     }
//     message.call(this);
//   },
// };

// obj.introudction();

//  Solution 3.0:
//  Use bind method to hard bind the context to the method

// let obj = {
//   name: 'Jatinder',
//   age: 30,
//   introudction: function() {
//     function message() {
//       console.log(`My name is ${this.name} and my age is ${this.age}.`);
//     }

//     let boundMessage = message.bind(this);
//     boundMessage();
//   },
// };

// obj.introudction();

//  Solution 3.1:
//  Use bind method to hard bind the context to the method
//  For function expression

// let obj = {
//   name: 'Jatinder',
//   age: 30,
//   introudction: function() {
//     let message = function() {
//       console.log(`My name is ${this.name} and my age is ${this.age}.`);
//     }.bind(this);

//     message();
//   },
// };

// obj.introudction();

//  Solution 4:
//  Use arrow function expression

let obj = {
  name: 'Jatinder',
  age: 30,
  introudction: function() {
    let message = () => {
      console.log(`My name is ${this.name} and my age is ${this.age}.`);
    };
    message();
  },
};

obj.introudction();