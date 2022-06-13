const Note = require("./Note");

class List extends Note {
  constructor({ title, date, items }) {
    super({ title, date });

    this.items = items;
  }
}

module.exports = List;