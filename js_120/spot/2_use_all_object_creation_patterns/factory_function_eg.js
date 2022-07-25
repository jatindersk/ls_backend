/**======================== Factory Function ================================
 * ==========================================================================
 * (Write answers to all questions and demonstrate using instance properties)
 * 
 * Show the prototype chain for instances created with this pattern.
 *
 *
 * Does this pattern conserve memory?
 *
 * 
 * What relationships (to other objects) can we determine from the instance?
 *  
 */

function createPlayer(name, position) {
  return {
    name,
    position,

    info() {
      return `${this.name} is a ${this.position} in the NBA`;
    }
  };
}

let player1 = createPlayer('Dennis', 'Forward');
console.log(player1.name === 'Dennis');
console.log(player1.position === 'Forward');
console.log(player1.info() === 'Dennis is a Forward in the NBA');

// Show the prototype chain for instances created with this pattern.

console.log(Object.getPrototypeOf(player1) === Object.prototype);
console.log(Object.getPrototypeOf(Object.prototype) === null);

// Does this pattern conserve memory?

console.log(player1.hasOwnProperty('info'));

// What relationships (to other objects) can we determine from the instance?

let anotherPlayer = createPlayer('Sammy', 'Defence');

console.log(anotherPlayer.__proto__ === Object.prototype);
console.log(anotherPlayer.constructor.name);