const dateFns = require("date-fns");
const { v4: uuidv4 } = require("uuid");

class Note {
	constructor({ title, date }) {
		this.title = title;
		this.date = date;
		this.status = "PENDING";
		this.id = uuidv4();
	}

	getFormattedDate() {
		return dateFns.format(new Date(this.date), "do MMM, yyyy");
	}

	createCard() {
		return `<div
      class="card note-card"
      name="note-card"
      data-card="reminder"
      data-title="${this.title}"
      data-date="${this.getFormattedDate()}"
      data-status="${this.status}"
      id="${this.id}"
    >
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
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

module.exports = Note;
