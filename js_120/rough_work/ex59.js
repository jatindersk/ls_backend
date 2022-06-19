message = 'Hello from the global scope!';

function deliverMessage() {
  console.log(this.message);
}

deliverMessage();
//  'Hello from the global scope!'

let foo = {
  message: 'Hello from the function scope!',
};

foo.deliverMessage = deliverMessage;

foo.deliverMessage();
//  'Hello from the function scope!'