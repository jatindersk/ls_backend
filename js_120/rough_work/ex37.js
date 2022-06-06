class Cat {
  constructor(name) {
    this.name = name;
  }
  speaks() {
    return `${this.name} says meowwww.`;
  }
}

let fakeCat = Object.create(Cat.prototype); // your implementation
console.log(fakeCat);
console.log(fakeCat instanceof Cat); // logs true
console.log(fakeCat.__proto__.constructor.name);           // logs undefined
console.log(fakeCat.speaks());       // logs undefined says meowwww.