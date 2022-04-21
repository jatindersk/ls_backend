const READLINE = require(`readline-sync`);

function createComputer() {
  let playerObject = createPlayer();

  let computerObject = {
    choose() {

      const choices = ['rock', 'paper', 'scissors'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject);
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
    },
  };

  return Object.assign(playerObject, humanObject);
}

function createPlayer() {
  return {
    move: null,
  };
}

const RPSGame = {
  human: createHuman(),
  computer: createComputer(),

  displayWelcomeMessage() {
    console.log('Welcome to Rock, Paper, Scissors!');
  },

  displayGoodbyeMessage() {
    console.log('Thanks for playing Rock, Paper, Scissors. Goodbye!');
  },

  displayWinner() {
    let humanMove = this.human.move;
    let computerMove = this.computer.move;

    console.log(`You chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper')) {
      console.log('You win!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock')) {
      console.log('Computer wins!');
    } else {
      console.log("It's a tie");
    }
  },

  playAgain() {
    let answer = READLINE.question(`Do you want to play again?\n`);
    return answer[0].toLowerCase() === 'y';
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();
      if (!this.playAgain()) break;
    }
    this.displayGoodbyeMessage();
  },
};

RPSGame.play();