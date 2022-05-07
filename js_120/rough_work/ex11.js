// function Dog(name, breed, weight) {
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;

//   this.bark = function() {
//     console.log(this.weight > 30 ? 'Woof!' : 'Yip');
//   };
// }

// let alex = new Dog('Alex', 'Poodle', 40);
// let token = new Dog('Token', 'German', 20);

// alex.bark();
// token.bark();

// let DogPrototype = {
//   bark() {
//     console.log(this.weight > 30 ? 'Woof!' : 'Yip');
//   }
// };

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, DogPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// let alex = new Dog('Alex', 'Poodle', 40);
// let token = new Dog('Token', 'German', 20);

// alex.bark();
// token.bark();

// function Dog(name, breed, weight) {
//   Object.setPrototypeOf(this, Dog.setPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.setPrototype = {
//   bark() {
//     console.log(this.weight > 30 ? 'Woof!' : 'Yip');
//   }
// };

// let alex = new Dog('Alex', 'Poodle', 40);
// let token = new Dog('Token', 'German', 20);

// alex.bark();
// token.bark();

// console.log(Object.getPrototypeOf(alex).bark === Dog.setPrototype.bark);


// function Dog(name, breed, weight) {
// //  Object.setPrototypeOf(this, Dog.setPrototype);
//   this.name = name;
//   this.breed = breed;
//   this.weight = weight;
// }

// Dog.prototype.bark = function() {
//   console.log(this.weight > 30 ? 'Woof!' : 'Yip');
// };

// let alex = new Dog('Alex', 'Poodle', 40);
// let token = new Dog('Token', 'German', 20);

// alex.bark();
// token.bark();

// console.log(alex.bark === Dog.prototype.bark);
// console.log(alex.constructor);


function Dog(name, breed, weight) {
  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype.bark = function () {
  console.log(this.weight > 30 ? 'Woof!' : 'Yip');
};

let alex = new Dog('Alex', 'Poodle', 40);
let token = new Dog('Token', 'German', 20);

alex.bark = function() {
  console.log(`WOOOF!!`);
};

alex.bark();
token.bark();

console.log(alex.bark === Dog.prototype.bark);
console.log(alex.constructor);