const generateNotes = (notes) =>
    notes.map((note) => note.createCard()).join("");

const generateHTML = (notes) => {
  return `<!DOCTYPE html>
    <html lang="en">
      <head>
        <meta charset="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <title>Note Taker</title>
        <link
          href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor"
          crossorigin="anonymous"
        />
        <link
          rel="stylesheet"
          href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.1.1/css/all.min.css"
          integrity="sha512-KfkfwYDsLkIlwQp6LFnl8zNdLGxu9YAA1QvwINks4PhcElQSvqcyVLLD9aMhXd13uQjoXtEKNosOWaZqXgel0g=="
          crossorigin="anonymous"
          referrerpolicy="no-referrer"
        />
        <link rel="stylesheet" href="./assets/css/styles.css" />
      </head>
      <body>
        <header class="jumbotron text-center">
          <h1 class="fs-1 text">Note Taker</h1>
          <div class="fs-6 text">
            An automated report generated from a NodeJS application using a CLI tool
          </div>
        </header>
        <main>
          <div
            class="d-flex justify-content-center flex-wrap flex-row align-items-center"
          >
            ${generateNotes(notes)}
          </div>
        </main>
        <script
          src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.bundle.min.js"
          integrity="sha384-pprn3073KE6tl6bjs2QrFaJGz5/SUsLqktiwsUTF55Jfv3qYSDhgCecCxMW52nD2"
          crossorigin="anonymous"
        ></script>
      </body>
    </html>
    `;
};

module.exports = {
  generateHTML,
};