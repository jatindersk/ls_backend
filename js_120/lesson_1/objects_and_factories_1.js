let createBook = (title, author, read = false) => {
  return {
    title: title,
    author,
    read: read,

    getDescription() {
      let message = `${this.title} was written by ${this.author}.`;
      return this.read ? `${message} I have read it.` : `${message} I haven't read it.`
    },

    readBook: function() {
      this.read = true;
    }
  };
};

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris');
let book3 = createBook('Aunts aren\'t Gentlemen', 'Stephen Fry');

console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

console.log(book1.read); // => false
book1.readBook();

console.log(book1.read); // => true
console.log(book1.getDescription());
console.log(book2.getDescription());
console.log(book3.getDescription());

// console.log(book1.read); // => true
// console.log(book2.read); // => false
// console.log(book3.read); // => false