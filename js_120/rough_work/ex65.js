const TESgames = {
  titles: ['Arena', 'Daggerfall', 'Morrowind', 'Oblivion', 'Skyrim'],
  seriesTitle: 'The Elder Scrolls',
  listGames: function() {
    this.titles.forEach(title => {
      console.log(this.seriesTitle + ': ' + title);
    }, this);
  }
};

TESgames.listGames();
//  Since this.seriesTitle is accessed within the callback
//  of forEach method. The value of this inside this callback will
//  be the global object as nested function loose their context.