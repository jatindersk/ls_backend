/**==================== ES6 Class (Pseudo-Classical) ========================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *  instance ==> Player.prototype ==> Object.prototype ==> null
 *
 * Does this pattern conserve memory?
 *  Yes, all instances of this pattern delegate calls to common methods to 
 *  the function prototype (Player.prototye).
 *
 * What relationships (to other objects) can we determine from the instance?
 *  The prototype object (Player.prototype) can be determined and, thereby,
 *  it can be determined which object defines the common methods.
 *  Because the object is created using the Player constructor function, it
 *  can be determined which function created the instance.
 */

class Person {
  constructor(name, position) {
    this.name = name;
    this.position = position;
  }

  info() {
    return `${this.name} is a ${this.position} in the NBA`;
  }
}

let player1 = new Person('Dennis', 'Forward');

console.log(player1.name === 'Dennis');
console.log(player1.position === 'Forward');
console.log(player1.info() === 'Dennis is a Forward in the NBA');
console.log("");

// Demonstration of prototype chain

console.log(Object.getPrototypeOf(player1) === Person.prototype);
console.log(Object.getPrototypeOf(Person.prototype) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);
console.log("");

// Demonstration that memory is conserved

console.log(player1.hasOwnProperty('info'));

let player2 = new Person('Goldy', 'Defence');
console.log(player1.info === player2.info);
console.log("");

// Demonstration of instance object relationships

console.log(player1.__proto__ === Person.prototype);
console.log(player1.constructor.name === 'Person');