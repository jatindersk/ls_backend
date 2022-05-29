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
let truck = new Truck();

car.goFast();
truck.goFast();

console.log('goFast' in car);
console.log('goFast' in truck);

//  The instance's prototype object has a constructor property.
//  This constructor property has a name attribute which returns
//  the name of the class /constructor function as a string.