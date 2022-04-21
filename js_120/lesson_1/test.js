const READLINE = require(`readline-sync`);

function createPlayer() {
  return {
    move: null,
  };
}

function createHuman() {
  let playerObject = createPlayer();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, or scissors:');
        choice = READLINE.question();
        if (['rock', 'paper', 'scissors'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
      console.log(`humanObject state`);
      console.log(humanObject); // { choose: [Function: choose] }
    },
  };

  return Object.assign(playerObject, humanObject);
}

let human = createHuman();
console.log(`before choose`);
console.log(human);
console.log(human.choose());
console.log(`after choose`);
console.log(human);