let civicArgs = {
  make: 'Honda',
  model: 'Civic',
  year: 2016,
  color: 'black',
  passengers: 5,
  convertible: false,
  mileage: 16000
};

function Car(args) {
  Object.assign(this, args);
}

let civic = new Car(civicArgs);

if (civic instanceof Car) {
  console.log(`It's a car.`);
} else {
  console.log(`It's not a car.`);
}