class Game {
  play() {
    return 'Start the game!';
  }
}

class Bingo extends Game {
  rulesOfPlay() {
    // rules of play
  }

  play() {
    return 'Bingo!';
  }
}

let bingo = new Bingo();
console.log(bingo.play());

//  This is called method overriding.
//  If we define a play method on the Bingo class
//  it will override the play method inherited from
//  the Game class.