function createGreeter(lang) {

  switch (lang) {
    case 'en':
      return () => console.log('Hello!');
    case 'es':
      return () => console.log('Holla!');
    case 'fr':
      return () => console.log('Bonjour!');
  }
}

let englishGreeter = createGreeter('en');
englishGreeter();

let frenchGreeter = createGreeter('fr');
frenchGreeter();