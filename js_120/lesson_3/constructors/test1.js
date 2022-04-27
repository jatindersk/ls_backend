// let DogPrototype = {
//   bark: function() {
//     console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
//   },
// };

function Dog(name, breed, weight) {
  //  Object.setPrototypeOf(this, Dog.myPrototype);

  this.name = name;
  this.breed = breed;
  this.weight = weight;
}

Dog.prototype = {
  bark: function() {
    console.log(this.weight > 20 ? 'Woof!' : 'Yip!');
  },
};

let maxi = new Dog('Maxi', 'German Shepherd', 32);
let dexter = new Dog('Dexter', 'Rottweiler', 50);
let biggie = new Dog('Biggie', 'Whippet', 9);

maxi.bark(); // 'Woof!'

console.log(maxi.hasOwnProperty('bark'));   // false
console.log(dexter.hasOwnProperty('bark')); // false
console.log(biggie.hasOwnProperty('bark')); // false
console.log(maxi.bark === dexter.bark);     // true
console.log(maxi.bark === biggie.bark);     // true
console.log(dexter.bark === biggie.bark);   // true