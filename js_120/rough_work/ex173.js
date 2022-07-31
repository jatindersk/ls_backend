//  Nouns: Player, rule, move
//  Verbs: compare, choose

//  Player: choose
//  Rule:
//  Move:

const readline = require('readline-sync');

function createPlayer(playerType) {
  return {
    playerType: playerType,
    move: null,

    choose() {
      if (this.isHuman()) {

        while (true) {
          console.log('Please choose rock, paper, or scissors:');
          let choice = readline.question();
          if (['rock', 'paper', 'scissors'].includes(choice.toLowerCase())) break;
          console.log('Sorry, invalid choice.');
        }

        this.move = choice;
      } else {
        const choices = ['rock', 'paper', 'scissors'];
        let randomIndex = Math.floor(Math.random() * 3);
        this.move = choices[randomIndex];
      }
    },

    isHuman() {
      return this.playerType === 'human';
    }
  }
}

function createMove() {
  return {

  }
}

function createRule() {
  return {

  }
}

let compare = function(move1, move2) {};

const RPSGame = {
  human: createPlayer('human'),
  computer: createPlayer('computer'),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);
  },

  play() {
    this.displayWelcomeMessage();
    this.human.choose();
    this.computer.choose();
    displayWinner();
    this.displayGoodbyeMessage();
  },
};