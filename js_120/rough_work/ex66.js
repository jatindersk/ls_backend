let foo = {
  a: 0,
  incrementA: function() {
    function increment() {
      this.a += 1;
      console.log(this.a);
    }

    increment.bind(this)();
  }
};

foo.incrementA();
foo.incrementA();
foo.incrementA();

//  NaN

console.log(foo.a);