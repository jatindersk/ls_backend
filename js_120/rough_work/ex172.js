const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();

let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
    }

    let bound = increment.bind(this);

    bound();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();
console.log(foo.a);