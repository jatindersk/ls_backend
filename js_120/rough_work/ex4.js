function createPerson(firstName, lastName = '') {
  return {
    firstName,
    lastName,
    completeName: function() {
      return `${this.firstName} ${this.lastName}`.trim();
    },
  };
}

let jatinder = createPerson('Jatinder', 'Koranga');
let hayat = createPerson(`Hayat`);

console.log(jatinder.completeName());
console.log(hayat.completeName());