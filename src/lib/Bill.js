const Note = require("./Note");

class Bill extends Note {
  constructor({ title, date, payee, amount }) {
    super({ title, date });

    this.payee = payee;
    this.amount = amount;
  }
}

module.exports = Bill;