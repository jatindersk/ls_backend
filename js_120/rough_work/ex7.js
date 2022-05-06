function createInvoice(services = {}) {
  return {
    phone: services.phone || 3000,
    internet: services.internet || 5500,
    total() {
      return this.phone + this.internet;
    },
  };
}

function createPayment(payment = {}) {
  return {
    phone: payment.phone || 0,
    internet: payment.internet || 0,
    amount: payment.amount || 0,
    total() {
      return this.amount || this.phone + this.internet;
    },
  };
}

function paymentTotal(payments) {
  return payments.reduce((sum, payment)  => sum + payment.total(), 0);
}

let payments = [];
payments.push(createPayment());
payments.push(createPayment({
  internet: 6500,
}));

payments.push(createPayment({
  phone: 2000,
}));

payments.push(createPayment({
  phone: 1000,
  internet: 4500,
}));

payments.push(createPayment({
  amount: 10000,
}));

console.log(paymentTotal(payments));      // => 24000