//  Animal -> cat, fish, coral, sponge

class Animal {
  move() {
    console.log(`supertype...`);
  }
}

class Fish extends Animal {
  move() {
    console.log(`swim...`);
  }
}

class Cat extends Animal {
  move() {
    console.log(`run...`);
  }
}

class Sponge extends Animal {}
class Coral extends Animal {}

let animal = [new Fish(), new Cat(), new Sponge(), new Coral()];
animal.forEach(animal => animal.move());