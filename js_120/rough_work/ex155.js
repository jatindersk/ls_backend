class Vehicle {
  constructor(year) {
    this.year = year;
    this.startEngine();
  }

  startEngine() {
    console.log(`I am parent.`);
  }
}

class Truck extends Vehicle {
  // constructor(year) {
  //   super(year);
  //   this.startEngine();
  // }

  startEngine() {
    super.startEngine();
    console.log('Ready to go!')
  }
}

let truck = new Truck(2003);
console.log(truck.year); // 2003