class Being {
  constructor(name) {
    this.name = name;
  }

  walk() {
    return `${this.name} ${this.gait()} forward`;
  }
}

class Person extends Being {
  constructor(name) {
    super(name);
  }

  gait() {
    return "strolls";
  }
}

class Cat extends Being {
  constructor(name) {
    super(name);
  }

  gait() {
    return "saunters";
  }
}

class Cheetah extends Being {
  constructor(name) {
    super(name);
  }

  gait() {
    return "runs";
  }
}

let mike = new Person("Mike");
console.log(mike.walk());
// "Mike strolls forward"

let kitty = new Cat("Kitty");
console.log(kitty.walk());
// "Kitty saunters forward"

let flash = new Cheetah("Flash");
console.log(flash.walk());
// "Flash runs forward"