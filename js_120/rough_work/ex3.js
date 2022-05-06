//  Context Loss
//  3. Passing function as an argument

// let obj = {
//   name:'jatinder',
//   age: 30,
//   introduction: function() {
//     [1, 2, 3].forEach(function(num) {
//       console.log(`${num}: My name is ${this.name} and I am ${this.age} years old.`);
//     });
//   },
// };

// obj.introduction();

//  ==========================================================================
//  ==========================================================================

//  Solution 1:
//  Preserve the context in a variale in the outer scope

// let obj = {
//   name:'jatinder',
//   age: 30,
//   introduction: function() {
//     let self = this;
//     [1, 2, 3].forEach(function(num) {
//       console.log(`${num}: My name is ${self.name} and I am ${self.age} years old.`);
//     });
//   },
// };

// obj.introduction();

//  ==========================================================================
//  ==========================================================================

//  Solution 2:
//  Use bind to hard bind the context to the method

// let obj = {
//   name:'jatinder',
//   age: 30,
//   introduction: function() {
//     [1, 2, 3].forEach(function(num) {
//       console.log(`${num}: My name is ${this.name} and I am ${this.age} years old.`);
//     }.bind(this));
//   },
// };

// obj.introduction();


//  ==========================================================================
//  ==========================================================================

//  Solution 3:
//  Use arrow function

// let obj = {
//   name:'jatinder',
//   age: 30,
//   introduction: function() {
//     [1, 2, 3].forEach(num => {
//       console.log(`${num}: My name is ${this.name} and I am ${this.age} years old.`);
//     });
//   },
// };

// obj.introduction();

//  ==========================================================================
//  ==========================================================================

//  Solution 4:
//  Use the optional second argument `thisArg` present in inbuilt Array methods
//  like forEach, map, filter, some, every etc

let obj = {
  name:'jatinder',
  age: 30,
  introduction: function() {
    [1, 2, 3].forEach(function(num) {
      console.log(`${num}: My name is ${this.name} and I am ${this.age} years old.`);
    }, this);
  },
};

obj.introduction();