class Animal {
  constructor(name, age, status, legs = 4, species = this.constructor.name.toLowerCase()) {
    this.name = name;
    this.age = age;
    this.legs = legs;
    this.species = species;
    this.status = status;
  }
  introduce() {
    if (this.species === 'cat') {
      return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}. Meow meow!`;
    } else {
      return `Hello, my name is ${this.name} and I am ${this.age} years old and ${this.status}.`;
    }
  }
}

class Cat extends Animal {
  constructor(name, age, status) {
    super(name, age, status);
  }
}

let cat = new Cat("Pepe", 2, "happy");
console.log(cat.introduce() === "Hello, my name is Pepe and I am 2 years old and happy. Meow meow!");
// logs true

class Dog extends Animal {
  constructor(name, age, status, master) {
    super(name, age, status);
    this.master = master;
  }

  greetMaster() {
    return `Hello ${this.master}! Woof, woof!`;
  }
}

let dog = new Dog('Jacky', 12, 'happy', 'Jatin');
console.log(dog.greetMaster());