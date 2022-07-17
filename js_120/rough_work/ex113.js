class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log(`Hello! I'm a cat!`);
  }

  personalGreeting() {
    console.log(`Hello! My name is Sophie!`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();