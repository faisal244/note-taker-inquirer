const Note = require("./Note");

class Bill extends Note {
	constructor({ title, date, payee, amount }) {
		super({ title, date });

		this.payee = payee;
		this.amount = amount;
	}

	createCard() {
		return `<div class="card note-card" id="${
			this.id
		}" name="note-card" data-card="bill" data-title="${
			this.title
		}" data-payee="${this.payee}" data-amount="${
			this.amount
		}" data-date="${this.getFormattedDate()}" data-status="${this.status}">
      <div class="card-body">
        <h5 class="card-title">${this.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted">${this.payee}</h6>
        <div class="card-text amount">
          <i class="fa-solid fa-sterling-sign me-2"></i>${this.amount}
        </div>
        <div class="card-text due-date">
          <i class="fa-solid fa-calendar-days me-2"></i>${this.getFormattedDate()}
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

module.exports = Bill;
