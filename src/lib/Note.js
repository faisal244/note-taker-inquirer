class Note {
  constructor({ title, date }) {
    this.title = title;
    this.date = date;
    this.status = "PENDING";
  }
}

module.exports = Note;