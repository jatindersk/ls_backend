let readline = require('readline-sync');

class Square {
  static UNUSED_SQUARE = " ";
  static HUMAN_MARKER = "X";
  static COMPUTER_MARKER = "O";

  constructor(marker = Square.UNUSED_SQUARE) {
    this.marker = marker;
  }

  toString() {
    return this.marker;
  }

  setMarker(marker) {
    this.marker = marker;
  }
}

class Board {
  constructor() {
    this.squares = {};
    for (let idx = 1; idx <= 9; idx += 1) {
      this.squares[idx] = new Square();
    }
  }

  display() {
    console.log("");
    console.log("     |     |");
    console.log(`  ${this.squares["1"]}  |  ${this.squares["2"]}  |  ${this.squares["3"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["4"]}  |  ${this.squares["5"]}  |  ${this.squares["6"]}`);
    console.log("     |     |");
    console.log("-----+-----+-----");
    console.log("     |     |");
    console.log(`  ${this.squares["7"]}  |  ${this.squares["8"]}  |  ${this.squares["9"]}`);
    console.log("     |     |");
    console.log("");
  }

  markSquareAt(key, marker) {
    this.squares[key].setMarker(marker);
  }
}

class Row {
  constructor() {
    //STUB
    // We need some way to identify a row of 3 squares
  }
}

class Marker {
  constructor() {
    //STUB
    // A marker is something that represents a player's "piece" on the board.
  }
}

class Player {
  constructor() {
    //STUB
    // maybe a "marker" to keep track of this player's symbol (i.e., 'X' or 'O')
  }

  mark() {
    //STUB
    // We need a way to mark the board with this player's marker.
    // How do we access the board?
  }

  play() {
    //STUB
    // We need a way for each player to play the game.
    // Do we need access to the board?
  }
}

class Human extends Player {
  constructor() {
    super();
  }
}

class Computer extends Player {
  constructor() {
    super();
  }
}

class TTTGame {
  // omitted code
  constructor() {
    this.board = new Board();
    this.human = new Human();
    this.computer = new Computer();
  }

  play() {
    //SPIKE
    this.displayWelcomeMessage();

    while (true) {
      this.board.display();

      this.humanMoves();
      if (this.gameOver()) break;

      this.computerMoves();
      if (this.gameOver()) break;
      break;
    }

    this.displayResults();
    this.displayGoodbyeMessage();
  }

  humanMoves() {
    let choice;

    while (true) {
      choice = readline.question('Choose a square between 1 and 9: ');

      let integerValue = parseInt(choice, 10);
      if (integerValue >= 1 && integerValue <= 9) break;

      console.log("Sorry, that's not a valid choice.");
      console.log("");
    }
    this.board.markSquareAt(choice, Square.HUMAN_MARKER);
  }

  computerMoves() {
    console.log('computer moves');
  }

  displayWelcomeMessage() {
    console.log("Welcome to Tic Tac Toe!");
  }

  displayGoodbyeMessage() {
    console.log("Thanks for playing Tic Tac Toe! Goodbye!");
  }

  displayResults() {
    //STUB
    // show the results of this game (win, lose, tie)
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

//  parseInt(numStr, radix)

//  Over the years parseInt has seen several changes.
//  to it's behaviour.
//  Especially dependent to the radix argument and
//  the numerics string argument.
//  It's behaviour is implementation dependent and
//  changes with change in the engine.
//  To avoid problems rising out of inconsistency in
//  behaviour, always use the radix argument.