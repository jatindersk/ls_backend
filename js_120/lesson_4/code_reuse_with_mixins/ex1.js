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


let blueTruck = new Truck();
blueTruck.goFast(); // => logs "I'm a Truck and going super fast!"

let smallCar = new Car();
smallCar.goFast(); // => logs "I'm a Car and going super fast!"

'goFast' in smallCar;  // => true
'goFast' in blueTruck; // => true


//  Since the constructor property references a function object,
//  constructor.name references the name property on that object.
//  Use MDN to lookup the definition of Function.name.