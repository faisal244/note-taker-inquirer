const Note = require("./Note");

class Appointment extends Note {
	constructor({ title, date, type, attendees }) {
		super({ title, date });

		this.type = type;
		this.attendees = attendees;
	}

	createAttendees() {
		return this.attendees
			.map(
				(attendee) =>
					`<li class="list-group-item" name="appointment-attendees" data-full-name=${attendee}>${attendee}</li>`
			)
			.join("");
	}

	createCard() {
		return `<div
      class="card note-card"
      name="note-card"
      data-card="appointment"
      data-title="${this.title}"
      data-type="${this.type}"
      data-date="${this.getFormattedDate()}"
      data-status="${this.status}"
      id="${this.id}"
    >
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">
          ${this.type}
        </h6>
        <ul class="card-text list-group mb-2">
          ${this.createAttendees()}
        </ul>
        <div class="card-text due-date">
          <i class="fa-solid fa-calendar-days me-2"></i
          >${this.getFormattedDate()}
        </div>
        <div class="form-check form-switch mt-2">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
            id="${this.id}"
          />
          <label class="form-check-label">${this.status}</label>
        </div>
      </div>
    </div>`;
	}
}

module.exports = Appointment;
