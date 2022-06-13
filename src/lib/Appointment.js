const Note = require("./Note");

class Appointment extends Note {
  constructor({ title, date, type, attendees }) {
    super({ title, date });

    this.type = type;
    this.attendees = attendees;
  }
}

module.exports = Appointment;