function Car(args) {
  console.log(this);
  Object.assign(this, args);

  this.drive = function() {
    this.started = true;
  };

  // rest of the methods
}

let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

let civic = new Car(civicArgs);
console.log(civic);