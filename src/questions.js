const billQuestions = [
  {
    type: "input",
    message: "Please enter the title of the bill:",
    name: "title",
  },

  {
    type: "number",
    message: "Please enter the bill amount:",
    name: "amount",
  },

  {
    type: "input",
    message: "Please enter the payee details:",
    name: "payee",
  },

  {
    type: "input",
    message: "Please enter the due date",
    name: "date",
  },

  {
    type: "date",
    name: "date",
    message: "Please enter the due date",
    default: new Date(),
    format: {month: "short", hour: undefined, minute: undefined},
    clearable: true,
  },

  {
    type: "list"

  }
]