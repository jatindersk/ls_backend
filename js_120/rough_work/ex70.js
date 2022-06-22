// let Earth = (plants, animals, humans) => {
//   this.plants = plants;
//   this.animals = animals;
//   this.humans = humans;
// };

function Earth(plants, animals, humans) {
  this.plants = plants;
  this.animals = animals;
  this.humans = humans;
}

let planetEarth = new Earth(['pine', 'dandelion'], ['zebra'], ['Asians']);
console.log(planetEarth.plants.join(', '));

console.log(planetEarth instanceof Earth);
console.log(planetEarth.constructor.name);