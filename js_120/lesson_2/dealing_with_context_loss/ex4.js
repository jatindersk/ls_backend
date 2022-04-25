const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(function(title) {
      console.log(this.seriesTitle + ': ' + title);
    });
  }
};

TESgames.listGames();     //  undefined + ': ' + title

//  It will not produce the desired output.
//  This is because the function argument in forEach method
//  looses it's context and thus `this` will point to the
//  global object. Since the global object doesn't have the
//  property named `seriesTitle`, it will return undefined for
//  this.seriesTitle expression.