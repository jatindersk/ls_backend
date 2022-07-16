class Pet {
  constructor(petType, petName) {
    this.petType = petType;
    this.petName = petName;
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

let butterscotch = new Pet('cat', 'Butterscotch');
let pudding      = new Pet('cat', 'Pudding');
let darwin       = new Pet('bearded dragon', 'Darwin');
let kennedy      = new Pet('dog', 'Kennedy');
let sweetie      = new Pet('parakeet', 'Sweetie Pie');
let molly        = new Pet('dog', 'Molly');
let chester      = new Pet('fish', 'Chester');

let phanson = new Owner('P Hanson');
let bholmes = new Owner('B Holmes');

class Shelter {
  constructor() {
    this.adoptions = {};
  }

  adopt(owner, pet) {
    let obj = this.adoptions;
    if (!obj[owner.name]) {
      obj[owner.name] = [pet];
      owner.petCount += 1;
    } else {
      obj[owner.name].push(pet);
      owner.petCount += 1;
    }
  }

  printAdoptions() {
    let adoptionsList = Object.entries(this.adoptions);

    adoptionsList.forEach(arr => {
      console.log(`${arr[0]} has adopted the following pets:`);

      arr[1].forEach(pet => {
        console.log(`a ${pet.petType} named ${pet.petName}`);
      });

      console.log();
    });
  }
}

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