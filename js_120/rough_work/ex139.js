// let foo = {
//   a: 0,
//   incrementA: function() {
//     let self = this;
//     function increment() {
//       self.a += 1;
//     }

//     increment();
//   }
// };

// foo.incrementA();
// foo.incrementA();
// foo.incrementA();
// console.log(foo.a);

let cat = {
  name: 'Pudding',
  colors: 'black and white',
  identify() {
    let obj = {
      report: function () {
        console.log(`${this.name} is a ${this.colors} cat.`);
      }
    };

    obj.report.call(cat);
  },
};

cat.identify();
// Expected output: Pudding is a black and white cat.