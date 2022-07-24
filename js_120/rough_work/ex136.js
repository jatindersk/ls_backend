let person = {
  name: 'Jatinder',
  age: 30,
  printInfo: function() {
    //  let self = this;
    let print = () => {
      console.log(`My name is ${this.name} and age is ${this.age}.`);
    };

    print();
  }
};

person.printInfo();