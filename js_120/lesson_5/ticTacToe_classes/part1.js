class Board {
  constructor() {

  }
}

class Square {
  constructor() {

  }
}

class Row {
  constructor() {

  }
}

class Marker {
  constructor() {

  }
}

class Player {
  constructor() {

  }

  mark() { }
  play() { }
}

class Human extends Player {
  constructor() {

  }
}

class Computer extends Player {
  constructor() {

  }
}

class TTTGame {
  constructor() {

  }

  play() {
    //SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.displayBoard();

      this.firstPlayerMoves();
      if (this.gameOver()) break;

      this.secondPlayerMoves();
      if (this.gameOver()) break;
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  displayWelcomeMessage() {
    //STUB
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    //STUB
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    //STUB
    // show the results of this game (win, lose, tie)
  }

  displayBoard() {
    //STUB
    // display the board, including its current state
  }

  firstPlayerMoves() {
    //STUB
    // the first player makes a move
  }

  secondPlayerMoves() {
    //STUB
    // the second player makes a move
  }

  gameOver() {
    //STUB
    return false;
  }
}

let game = new TTTGame();
game.play();