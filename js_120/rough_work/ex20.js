// function createCar(make, model, year) {
//   return {
//     make,
//     model,
//     year,
//     started: false,

//     start() {
//       this.started = true;
//     },

//     stop() {
//       this.started = false;
//     },
//   };
// }

// let car1 = createCar('Hyundai', 'santro', 2018);
// let car2 = createCar('Honda', 'Civic', 2020);
// console.log(car1);
// console.log(car2);

// let carPrototype = {
//   star() {
//     this.started = true;
//   },

//   stop() {
//     this.started = false;
//   },
// };

// let car1 = Object.create(carPrototype);
// car1.make = 'Hyundai';
// car1.model = 'i20';
// car1.year = 2020;

// let car2 = Object.create(carPrototype);
// car2.make = 'Maruti';
// car2.model = 'Baleno';
// car2.year = 2012;

// console.log(car1);
// console.log(car2);

let carPrototype = {
  start() {
    this.started = true;
  },

  stop() {
    this.stopped = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  },
};

let car1 = Object.create(carPrototype).init('Hyundai', 'Verna', 2010);
let car2 = Object.create(carPrototype).init('TATA', 'Hexa', 2020);

console.log(car1);
console.log(car2);