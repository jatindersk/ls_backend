const READLINE = require(`readline-sync`);

function createComputer() {
  let playerObject = createPlayer();
  let scoreObject = createScore();

  let computerObject = {
    choose() {

      const choices = ['rock', 'paper', 'scissors', 'lizard', 'spock'];
      let randomIndex = Math.floor(Math.random() * choices.length);
      this.move = choices[randomIndex];
    },
  };

  return Object.assign(playerObject, computerObject, scoreObject);
}

function createHuman() {
  let playerObject = createPlayer();
  let scoreObject = createScore();

  let humanObject = {
    choose() {
      let choice;

      while (true) {
        console.log('Please choose rock, paper, scissors, lizard or spock');
        choice = READLINE.question();
        if (['rock', 'paper', 'scissors', 'lizard', 'spock'].includes(choice)) break;
        console.log('Sorry, invalid choice.');
      }
      this.move = choice;
    },
  };

  return Object.assign(playerObject, humanObject, scoreObject);
}

function createPlayer() {
  return {
    move: null,
  };
}

function createScore() {
  return {
    score: 0,
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

    console.log(`\nYou chose: ${this.human.move}`);
    console.log(`The computer chose: ${this.computer.move}`);

    if ((humanMove === 'rock' && computerMove === 'scissors') ||
      (humanMove === 'paper' && computerMove === 'rock') ||
      (humanMove === 'scissors' && computerMove === 'paper') ||
      (humanMove === 'rock' && computerMove === 'lizard') ||
      (humanMove === 'lizard' && computerMove === 'paper') ||
      (humanMove === 'scissors' && computerMove === 'lizard') ||
      (humanMove === 'lizard' && computerMove === 'spock') ||
      (humanMove === 'spock' && computerMove === 'rock') ||
      (humanMove === 'paper' && computerMove === 'spock') ||
      (humanMove === 'spock' && computerMove === 'scissors') ||
      (humanMove === 'lizard' && computerMove === 'spock')) {
      this.human.score += 1;
      console.log('You win this round!');
    } else if ((humanMove === 'rock' && computerMove === 'paper') ||
      (humanMove === 'paper' && computerMove === 'scissors') ||
      (humanMove === 'scissors' && computerMove === 'rock') ||
      (humanMove === 'lizard' && computerMove === 'rock') ||
      (humanMove === 'paper' && computerMove === 'lizard') ||
      (humanMove === 'lizard' && computerMove === 'scissors') ||
      (humanMove === 'spock' && computerMove === 'lizard') ||
      (humanMove === 'rock' && computerMove === 'spock') ||
      (humanMove === 'spock' && computerMove === 'paper') ||
      (humanMove === 'scissors' && computerMove === 'spock') ||
      (humanMove === 'spock' && computerMove === 'lizard')) {
      this.computer.score += 1;
      console.log('Computer wins this round!');
    } else {
      console.log("It's a tie");
    }
    console.log(`\nYour score is ${this.human.score} and computer's score is ${this.computer.score}\n`);
  },

  playAgain() {
    let answer = READLINE.question(`Do you want to play again?\n`);
    return answer[0].toLowerCase() === 'y';
  },

  maxScoreReached() {
    return this.human.score === 5 ||
      this.computer.score === 5;
  },

  displayMatchWinner() {
    let humanScore = this.human.score;
    let computerScore = this.computer.score;
    console.log(`${humanScore > computerScore ? 'Yay!! You' : 'Booo..Computer'} won this match`);
  },

  resetScores() {
    this.human.score = 0;
    this.computer.score = 0;
  },

  play() {
    this.displayWelcomeMessage();
    while (true) {
      this.human.choose();
      this.computer.choose();
      this.displayWinner();

      if (this.maxScoreReached()) {
        this.displayMatchWinner();
        this.resetScores();
        if (!this.playAgain()) break;
      }
    }

    this.displayGoodbyeMessage();
  },
};

RPSGame.play();