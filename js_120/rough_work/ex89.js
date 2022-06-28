class Greeting {
  greet(str) {
    console.log(str);
  }
}

class Hello extends Greeting {
  hi() {
    this.greet('Hello');
  }
}

class Goodbye extends Greeting {
  bye() {
    this.greet('bye');
  }
}

let hello = new Hello();
hello.hi();

let bye = new Goodbye();
bye.bye();

bye.greet('test');