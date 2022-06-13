const inquirer = require("inquirer");
const path = require("path");
const fs = require("fs");

const Appointment = require("./lib/Appointment");
const Bill = require("./lib/Bill");
const List = require("./lib/List");
const Note = require("./lib/Note");
const { generateHTML } = require("./generator");
const {
  noteTypeQuestion,
  addNewNoteQuestion,
  billQuestions,
  appointmentQuestions,
  appointmentAttendeesQuestions,
  listQuestions,
  listItemQuestions,
  reminderQuestions,
} = require("./questions");

inquirer.registerPrompt("date", require("inquirer-date-prompt"));

const init = async () => {
  let noteCreationInProgress = true;
  const notes = [];

  while (noteCreationInProgress) {
    // get the type of note to add
    const { type } = await inquirer.prompt(noteTypeQuestion);

    // if bill
    if (type === "bill") {
      // prompt bill questions and get answers
      const billAnswers = await inquirer.prompt(billQuestions);

      const bill = new Bill(billAnswers);

      notes.push(bill);
    }

    // if appointment
    if (type === "appointment") {
      // prompt appointment questions and get answers
      const appointmentAnswers = await inquirer.prompt(appointmentQuestions);

      let appointmentAttendeesInProgress = true;
      appointmentAnswers.attendees = [];

      // start loop for collecting attendees
      while (appointmentAttendeesInProgress) {
        // prompt appointment attendees questions and get answers
        const { attendee, addAnotherAttendee } = await inquirer.prompt(
            appointmentAttendeesQuestions
        );

        // push attendee to array
        appointmentAnswers.attendees.push(attendee);

        if (!addAnotherAttendee) {
          appointmentAttendeesInProgress = false;
        }
      }

      const appointment = new Appointment(appointmentAnswers);

      notes.push(appointment);
    }

    // if list
    if (type === "list") {
      // prompt list questions and get answers
      const listAnswers = await inquirer.prompt(listQuestions);

      let listItemsInProgress = true;
      listAnswers.items = [];

      // start loop for collecting list items
      while (listItemsInProgress) {
        // prompt list items questions and get answers
        const { listItem, addListItem } = await inquirer.prompt(
            listItemQuestions
        );

        // push attendee to array
        listAnswers.items.push(listItem);

        if (!addListItem) {
          listItemsInProgress = false;
        }
      }

      const list = new List(listAnswers);

      notes.push(list);
    }

    // if reminder
    if (type === "reminder") {
      // prompt reminder questions and get answers
      const reminderAnswers = await inquirer.prompt(reminderQuestions);

      const reminder = new Note(reminderAnswers);

      notes.push(reminder);
    }

    const { addAnotherNote } = await inquirer.prompt(addNewNoteQuestion);

    if (!addAnotherNote) {
      noteCreationInProgress = false;
    }
  }

  console.log(notes);

  // generate HTML
  const html = generateHTML(notes);

  // write html to file
  fs.writeFileSync(path.join(__dirname, "../dist", "index.html"), html);

  console.log("DONE");
};

init();