const notesContainer = $("#notes-container");

const getNotes = () => {
	// declare an array to store all notes
	const notes = [];

	// find all card elements
	const cards = $('div[name="note-card"]');

	// get data attributes from each card
	cards.map(function () {
		const type = $(this).attr("data-card");
		const id = $(this).attr("id");

		// if card type is bill
		if (type === "bill") {
			// add note to notes array
			notes.push({
				id,
				noteType: type,
				title: $(this).attr("data-title"),
				payee: $(this).attr("data-payee"),
				amount: $(this).attr("data-amount"),
				date: $(this).attr("data-date"),
				status: $(this).attr("data-status"),
			});
		}

		// if card type is appointment
		if (type === "appointment") {
			// declare an array to track all attendees
			const attendees = [];

			// find all list items and get attendee full name
			$('li[name="appointment-attendees"').map(function () {
				// add attendee to array
				attendees.push($(this).attr("data-full-name"));
			});

			// add note to array
			notes.push({
				id,
				noteType: type,
				title: $(this).attr("data-title"),
				type: $(this).attr("data-type"),
				attendees,
				date: $(this).attr("data-date"),
				status: $(this).attr("data-status"),
			});
		}

		// if card type is list
		if (type === "list") {
			// declare an array to track all items
			const items = [];

			// find all list items and get item name
			$('li[name="list-items"').map(function () {
				// add item to array
				items.push($(this).attr("data-item"));
			});

			// add note to array
			notes.push({
				id,
				noteType: type,
				title: $(this).attr("data-title"),
				items,
				date: $(this).attr("data-date"),
				status: $(this).attr("data-status"),
			});
		}

		// if card type is reminder
		if (type === "reminder") {
			// add note to array
			notes.push({
				id,
				noteType: type,
				title: $(this).attr("data-title"),
				date: $(this).attr("data-date"),
				status: $(this).attr("data-status"),
			});
		}
	});

	return notes;
};

const renderBillNote = (note) => {
	$("#notes-container").append(`<div
    class="card note-card"
    id="${note.id}"
    name="note-card"
    data-card="bill"
    data-title="${note.title}"
    data-payee="${note.payee}"
    data-amount="${note.amount}"
    data-date="${note.date}"
    data-status="${note.status}"
  >
    <div class="card-body">
      <h5 class="card-title">${note.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${note.payee}</h6>
      <div class="card-text amount">
        <i class="fa-solid fa-sterling-sign me-2"></i>${note.amount}
      </div>
      <div class="card-text due-date">
        <i class="fa-solid fa-calendar-days me-2"></i>${note.date}
      </div>
      <div class="form-check form-switch mt-2">
        ${
					note.status === "PENDING"
						? `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
              />`
						: `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
                checked
              />`
				}
        <label class="form-check-label">${note.status}</label>
      </div>
    </div>
  </div>`);
};

const renderReminderNote = (note) => {
	$("#notes-container").append(`<div
    class="card note-card"
    name="note-card"
    data-card="reminder"
    data-title="${note.title}"
    data-date="${note.date}"
    data-status="${note.status}"
    id="${note.id}"
  >
    <div class="card-body">
      <h5 class="card-title">${note.title}</h5>
      <div class="card-text due-date">
        <i class="fa-solid fa-calendar-days me-2"></i>${note.date}
      </div>
      <div class="form-check form-switch mt-2">
        ${
					note.status === "PENDING"
						? `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
              />`
						: `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
                checked
              />`
				}
        <label class="form-check-label">${note.status}</label>
      </div>
    </div>
  </div>`);
};

const renderAppointmentCard = (note) => {
	$("#notes-container").append(`<div
    class="card note-card"
    name="note-card"
    data-card="appointment"
    data-title="${note.title}"
    data-type="${note.type}"
    data-date="${note.date}"
    data-status="${note.status}"
    id="${note.id}"
  >
    <div class="card-body">
      <h5 class="card-title">${note.title}</h5>
      <h6 class="card-subtitle mb-2 text-muted">${note.type}</h6>
      <ul class="card-text list-group mb-2">
        ${note.attendees
					.map(
						(attendee) => `<li
                            class="list-group-item"
                            name="appointment-attendees"
                            data-full-name="${attendee}"
                          >
                            ${attendee}
                          </li>`
					)
					.join("")}
      </ul>
      <div class="card-text due-date">
        <i class="fa-solid fa-calendar-days me-2"></i>${note.date}
      </div>
      <div class="form-check form-switch mt-2">
        ${
					note.status === "PENDING"
						? `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
              />`
						: `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
                checked
              />`
				}
        <label class="form-check-label">${note.status}</label>
      </div>
    </div>
  </div>`);
};

const renderListCard = (note) => {
	$("#notes-container").append(`<div
    class="card note-card"
    name="note-card"
    data-card="list"
    data-title="${note.title}"
    data-date="${note.date}"
    data-status="${note.status}"
    id="${note.id}"
  >
    <div class="card-body">
      <h5 class="card-title">${note.title}</h5>
      <ul class="card-text list-group mb-2">
        ${note.items
					.map(
						(item) => `<li
                        class="list-group-item"
                        name="list-items"
                        data-item="${item}"
                      >
                        ${item}
                      </li>`
					)
					.join("")}
      </ul>
      <div class="card-text due-date">
        <i class="fa-solid fa-calendar-days me-2"></i>${note.date}
      </div>
      <div class="form-check form-switch mt-2">
        ${
					note.status === "PENDING"
						? `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
              />`
						: `<input
                class="form-check-input"
                type="checkbox"
                role="switch"
                id="${note.id}"
                checked
              />`
				}
        <label class="form-check-label">${note.status}</label>
      </div>
    </div>
  </div>`);
};

const renderNotesFromLocalStorage = (notes) => {
	notes.forEach((note) => {
		if (note.noteType === "bill") {
			renderBillNote(note);
		}
		if (note.noteType === "appointment") {
			renderAppointmentCard(note);
		}
		if (note.noteType === "list") {
			renderListCard(note);
		}
		if (note.noteType === "reminder") {
			renderReminderNote(note);
		}
	});
};

const readFromLocalStorage = (key, defaultValue) => {
	// get from LS using key name
	const dataFromLS = localStorage.getItem(key);

	// parse data from LS
	const parsedData = JSON.parse(dataFromLS);

	if (parsedData) {
		return parsedData;
	} else {
		return defaultValue;
	}
};

const handleChecked = (event) => {
	const target = $(event.target);

	// check if event was a change event from an input checkbox
	if (target.is('input[type="checkbox"]')) {
		// get all notes from local storage
		const notes = readFromLocalStorage("notes", []);

		// generate updated notes by updating the status
		const updatedNotes = notes.map((note) => {
			if (note.id === target.attr("id")) {
				note.status = target.is(":checked") ? "COMPLETE" : "PENDING";

				return note;
			}

			return note;
		});

		// write updated notes to local storage
		localStorage.setItem("notes", JSON.stringify(updatedNotes));

		notesContainer.empty();

		// render notes from local storage
		renderNotesFromLocalStorage(updatedNotes);
	}
};

const onReady = () => {
	// get all notes from local storage
	const notesFromLocalStorage = JSON.parse(localStorage.getItem("notes")) || [];

	// check if local storage has no notes
	if (!notesFromLocalStorage.length) {
		// get all notes from the html page
		const notes = getNotes();

		// write all notes to local storage
		localStorage.setItem("notes", JSON.stringify(notes));
	} else {
		// render notes from local storage
		notesContainer.empty();
		renderNotesFromLocalStorage(notesFromLocalStorage);
	}
};

$(document).ready(onReady);
notesContainer.change(handleChecked);
