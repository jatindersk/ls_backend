function Lizard() {
  this.scamper = function() {
    console.log("I'm scampering!");
  };
}

let lizzy = new Lizard();
lizzy.scamper();
console.log(lizzy.__proto__.constructor.name);
console.log(lizzy instanceof Lizard);