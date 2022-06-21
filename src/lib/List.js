const Note = require("./Note");

class List extends Note {
	constructor({ title, date, items }) {
		super({ title, date });

		this.items = items;
	}

	createListItems() {
		return this.items
			.map(
				(item) =>
					`<li class="list-group-item" name="list-items" data-item=${item}>${item}</li>`
			)
			.join("");
	}

	createCard() {
		return `<div
      class="card note-card"
      name="note-card"
      data-card="list"
      data-title="${this.title}"
      data-date="${this.getFormattedDate()}"
      data-status="${this.status}"
      id="${this.id}"
    >
      <div class="card-body">
        <h5 class="card-title">
          ${this.title}
        </h5>
        <ul class="card-text list-group mb-2">
          ${this.createListItems()}
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

module.exports = List;
