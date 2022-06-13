const Note = require("./Note");

class List extends Note {
  constructor({ title, date, items }) {
    super({ title, date });

    this.items = items;
  }

  createListItems() {
    return this.items
        .map((item) => `<li class="list-group-item">${item}</li>`)
        .join("");
  }

  createCard() {
    return `<div
      class="card note-card"
      name="note-card"
      data-card="list"
      id="${this.id}"
    >
      <div class="card-body">
        <h5 class="card-title" data-title="${this.title}">
          ${this.title}
        </h5>
        <ul class="card-text list-group mb-2" name="items">
          ${this.createListItems()}
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

module.exports = List;