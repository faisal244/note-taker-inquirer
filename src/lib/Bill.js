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
    }" name="note-card" data-card="bill">
      <div class="card-body">
        <h5 class="card-title" data-title="${this.title}">${this.title}</h5>
        <h6 class="card-subtitle mb-2 text-muted" data-payee="${this.payee}">${
        this.payee
    }</h6>
        <div class="card-text amount">
          <i class="fa-solid fa-sterling-sign me-2"></i><span data-amount="${
        this.amount
    }">${this.amount}</span>
        </div>
        <div class="card-text due-date">
          <i class="fa-solid fa-calendar-days me-2"></i><span data-date="${this.getFormattedDate()}">${this.getFormattedDate()}</span>
        </div>
        <div class="form-check form-switch mt-2">
          <input
            class="form-check-input"
            type="checkbox"
            role="switch"
          />
          <label class="form-check-label" data-status="${this.status}">${
        this.status
    }</label>
        </div>
      </div>
    </div>`;
  }
}

module.exports = Bill;