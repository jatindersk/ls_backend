class Cat {
  constructor(name) {
    this.name = name;
  }

  static genericGreeting() {
    console.log(`I'm a cat!`);
  }

  personalGreeting() {
    console.log(`I'm Sophie and I'm a Cat!`);
  }
}

let kitty = new Cat("Sophie");
Cat.genericGreeting();
kitty.personalGreeting();