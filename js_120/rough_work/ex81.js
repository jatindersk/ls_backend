// function createBikes(make, model, year) {
//   return {
//     make,
//     model,
//     year,
//     started: false,

//     start: function() {
//       this.started = true;
//     },

//     stop() {
//       this.started = false;
//     }
//   };
// }

// let bike1 = createBikes('TVS', 'Apache', 2020);

// bike1.start();
// console.log(bike1.started);

// bike1.stop();
// console.log(bike1.started);


let bikePrototype = {
  start() {
    this.started = true;
  },

  stop() {
    this.started = false;
  },

  init(make, model, year) {
    this.make = make;
    this.model = model;
    this.year = year;
    return this;
  }
};

let bike1 = Object.create(bikePrototype).init('KTM', 'Duke 500', 2009);

bike1.start();
console.log(bike1.started);

bike1.stop();
console.log(bike1.started);