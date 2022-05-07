// let car = {
//   make: 'BMW',
//   model: 'A8',
//   year: 2010,
//   started: false,

//   start() {
//     this.started = true;
//   },

//   stop() {
//     this.started = false;
//   },
// };

// console.log(car);

// function Car(make, model, year) {
//   this.make = make;
//   this.model = model;
//   this.year = year;
//   this.started = true;

//   this.start = function() {
//     this.started = true;
//   };

//   this.stop = function() {
//     this.started = false;
//   };
// }

// let toyota = new Car('toyota', 'Corolla', 2022);
// let leaf = new Car('Nissan', 'LEAF', 2018);
// let nova = new Car('Chevrolet', 'Nova', 1974);
// console.log(toyota);
// console.log(leaf);
// console.log(nova);

//  JS creats a new object

//  It then assigns the prototype of the new object
//  to the object referenced by the prototype property
//  of the constructor

//  It then sets the value of this to reference the new object
//  inside the constructor

//  It then invokes the constructor and uses the value of this
//  to create new methods and properties in the new object

//  After the function finishes execution JS returns the newly
//  created object explicitly

let foo = {
  Sayhi: function() {
    this.msg = 'Hi';
  }
};

let hi = new foo.Sayhi();
console.log(hi.msg);

//  new is incompatible with special functions called as generators
//  new is incompatible with arrow functions
//  new is incompatible with compact syntax or concise syntax also
//  called concise methods as well