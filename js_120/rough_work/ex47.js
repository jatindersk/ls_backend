function createBook(title, author, read = false) {
  return {
    title: title,
    author: author,
    read,

    getDescription: function () {
      if (this.read === true) return `${this.title} was written by ${this.author}. I have read it.`;
      else return `${this.title} was written by ${this.author}. I haven't read it.`;
    },

    readBook() {
      this.read = true;
    }
  };
}

let book1 = createBook('Mythos', 'Stephen Fry');
let book2 = createBook('Me Talk Pretty One Day', 'David Sedaris', false);
let book3 = createBook("Aunts aren't Gentlemen", 'PG Wodehouse', true);

console.log(book1.getDescription()); // Mythos was written by David Fry. I haven't read it.
book1.readBook();
console.log(book1.getDescription()); // Mythos was written by David Fry. I have read it.

console.log(book1.read); // => false
console.log(book2.read); // => false
console.log(book3.read); // => true

console.log(book1.read); // => false
book1.readBook();
console.log(book1.read); // => true