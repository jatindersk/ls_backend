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
    return 'bing bing bing BINGO!';
  }
}

let bingo = new Bingo();
console.log(bingo.play());

//  The `play` method defined on the Bingo class
//  will be invoked by the objects / instances of
//  the Bingo subclass instead of the `play` method
//  defined on the Game class.

//  This method is called an instance method as it will
//  invoked by the instances / objects of Bingo subclass.