class Pet {
  constructor(petType, name) {
    this.petType = petType;
    this.name = name;
  }
}

class Owner {
  constructor(name) {
    this.name = name;
    this.petCount = 0;
  }

  numberOfPets() {
    return this.petCount;
  }
}

class Shelter {
  constructor() { }

  adopt(owner, pet) {
    this.petList = this.petList || {};
    this.petList[owner.name] = this.petList[owner.name] || [];
    this.petList[owner.name].push(pet);
    owner.petCount += 1;
  }

  printAdoptions() {
    let owners = Object.keys(this.petList);

    owners.forEach(owner => {
      console.log(`${owner} has adopted the following pets:`);

      this.petList[owner].forEach(pet => {
        console.log(`a ${pet.petType} named ${pet.name}`);
      });

      console.log('');
    });
  }
}

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding = new Pet('cat', 'Pudding');
let darwin = new Pet('bearded dragon', 'Darwin');
let kennedy = new Pet('dog', 'Kennedy');
let sweetie = new Pet('parakeet', 'Sweetie Pie');
let molly = new Pet('dog', 'Molly');
let chester = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

let shelter = new Shelter();
shelter.adopt(phanson, butterscotch);
shelter.adopt(phanson, pudding);
shelter.adopt(phanson, darwin);
shelter.adopt(bholmes, kennedy);
shelter.adopt(bholmes, sweetie);
shelter.adopt(bholmes, molly);
shelter.adopt(bholmes, chester);
shelter.printAdoptions();
console.log(`${phanson.name} has ${phanson.numberOfPets()} adopted pets.`);
console.log(`${bholmes.name} has ${bholmes.numberOfPets()} adopted pets.`);