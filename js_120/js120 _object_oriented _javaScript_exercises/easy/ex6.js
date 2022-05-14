class Vehicle {
  constructor(make, model, wheels) {
    this.make = make;
    this.model = model;
    this.wheels = wheels;
  }

  info() {
    return `${this.make} ${this.model}`;
  }

  getWheels() {
    return this.wheels;
  }
}

class Car extends Vehicle {
  constructor(make, model, wheels) {
    super(make, model, wheels);
  }

  // getWheels() {
  //   return 4;
  // }
}

class Motorcycle extends Vehicle {
  constructor(make, model, wheels) {
    super(make, model, wheels);
  }

  // getWheels() {
  //   return 2;
  // }
}

class Truck extends Vehicle {
  constructor(make, model, wheels, payload) {
    super(make, model, wheels);
    this.payload = payload;
  }

  // getWheels() {
  //   return 6;
  // }
}

let car = new Car('BMW', 2020, 4);
let motorcycle = new Motorcycle('KTM RC250', 2021, 2);
let truck = new Truck('TATA', 2000, 6, '2 Tonne');

console.log(car.info());
console.log(motorcycle.info());
console.log(truck.info());
console.log(car.getWheels());
console.log(motorcycle.getWheels());
console.log(truck.getWheels());