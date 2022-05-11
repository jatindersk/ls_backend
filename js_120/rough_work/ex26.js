class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }
}

//  This is called method overriding.
//  The play method defined in the Bingo class
//  will override the play method defined in the
//  Game class when an instance of Bingo tries to
//  access it.