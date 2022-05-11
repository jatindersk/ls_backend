class Animal {
  move() { }
}

class Fish extends Animal {
  move() {
    console.log(`Swim`);
  }
}

class Cat extends Animal {
  move() {
    console.log('Walk');
  }
}

class Coral extends Animal { }
class Sponge extends Animal { }

let animals = [new Coral(), new Sponge(), new Cat(), new Fish()];
animals.forEach(animal => animal.move());

//  Polymorphism through Duck Typing

class Chef {
  prepare(wedding) {
    this.prepareFood(wedding.guests);
  }

  prepareFood() {

  }
}

class Decorator {
  prepare(wedding) {
    this.decoratePlace(wedding.flowers);
  }

  decoratePlace() {

  }
}

class Musician {
  prepare(wedding) {
    this.preparePerformance(wedding.songs);
  }

  preparePerformance() {

  }
}

class Wedding {
  constructor(guests, flowers, songs) {
    this.guests = guests;
    this.flowers = flowers;
    this.songs = songs;
  }

  prepare(preparers) {
    preparers.forEach(preparer => {
      preparer.prepare(this);
    });
  }
}