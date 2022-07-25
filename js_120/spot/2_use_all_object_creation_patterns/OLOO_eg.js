/**=============== Objects-Linking to Other Objects (OLOO) ==================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *  player2 ==> playerPrototype ==> Object.prototype ==> null
 *
 * Does this pattern conserve memory?
 *  Yes, all instances of this pattern delegate calls to common methods to 
 *  the prototype (playerPrototype).
 *
 * What relationships (to other objects) can we determine from the instance?
 *  The prototype object (playerPrototype) can be determined, and, thereby,
 *  it can be determined which object defines the common methods.
 *  Because the object is defined using the Object.create() function, all
 *  instances created using this pattern reference the 'Object' constructor.
 */

const playerPrototype = {
  init(name, position) {
    this.name = name;
    this.position = position;
    return this;
  },

  info() {
    return `${this.name} is a ${this.position} in the NBA`;
  }
};

let player1 = Object.create(playerPrototype).init('Dennis', 'Forward');
console.log(player1.name === 'Dennis');
console.log(player1.position === 'Forward');
console.log(player1.info() === 'Dennis is a Forward in the NBA');
console.log("");

// Demonstration of prototype chain

console.log(Object.getPrototypeOf(player1) === playerPrototype);
console.log(Object.getPrototypeOf(playerPrototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);
console.log("");

// Demonstration that memory is conserved

console.log(Object.getOwnPropertyNames(player1));

let newPlayer2 = Object.create(playerPrototype).init('Dennis', 'Forward');
console.log(newPlayer2.info === player1.info);
console.log("");

// Demonstration of instance object relationships

console.log(player1.__proto__ === playerPrototype);
console.log(player1.constructor.name);
console.log("");
