let greeting = {
  morning: 'Good morning, ',
  afternoon: 'Good afternoon, ',
  night: 'Good night, ',

  greetings: function(name) {
    let hour = (new Date()).getHours();

    if (hour < 12) console.log(this.morning + name);
    else if (hour < 18) console.log(this.afternoon + name);
    else console.log(this.night + name);
  }
};

let spanishWords = {
  morning: 'Buenos dias, ',
  afternoon: 'Buenas tardes, ',
  evening: 'Buenas noches, '
};

greeting.greetings('Jatinder');

let spanishGreeter = greeting.greetings.bind(spanishWords);
spanishGreeter('Jatinder');