const Note = require("./Note");

class Appointment extends Note {
  constructor({ title, date, type, attendees }) {
    super({ title, date });

    this.type = type;
    this.attendees = attendees;
  }

  createAttendees() {
    return this.attendees
        .map((attendee) => `<li class="list-group-item">${attendee}</li>`)
        .join("");
  }

  createCard() {
    return `<div
      class="card note-card"
      name="note-card"
      data-card="appointment"
      id="${this.id}"
    >
      <div class="card-body">
        <h5 class="card-title" data-title="${this.title}">${this.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted" data-type="${this.type}">
          ${this.type}
        </h6>
        <ul class="card-text list-group mb-2" name="attendees">
          ${this.createAttendees()}
        </ul>
        <div class="card-text due-date">
          <i class="fa-solid fa-calendar-days me-2"></i
          ><span data-date="${this.getFormattedDate()}">${this.getFormattedDate()}</span>
        </div>
        <div class="form-check form-switch mt-2">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
          />
          <label class="form-check-label" data-status="${this.status}"
            >${this.status}</label
          >
        </div>
      </div>
    </div>`;
  }
}

module.exports = Appointment;