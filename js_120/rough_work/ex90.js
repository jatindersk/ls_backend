const Speed = {
  goFast() {
    console.log(`I'm a ${this.constructor.name} and going super fast!`);
  }
};

class Car {
  goSlow() {
    console.log(`I'm safe and driving slow.`);
  }
}

Object.assign(Car.prototype, Speed);

class Truck {
  goVerySlow() {
    console.log(`I'm a heavy truck and like going very slow.`);
  }
}

Object.assign(Truck.prototype, Speed);

let car = new Car();
console.log('goFast' in car);
car.goFast();

let truck = new Truck();
console.log('goFast' in truck);
truck.goFast();

//  The prototype object of the instance
//  (which is also the prototype object of the constructor)
//  has a .constructor property. This property further has a
//  'name' property which simply contains the name of the
//  constructor as a string.