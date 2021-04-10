const fs = require("fs");
const chalk = require("chalk");

// Add
const addNote = (title, body) => {
  let notes = loadNote();
  let duplicateNote = notes.find((note) => note.title === title);

  if (!duplicateNote) {
    notes.push({
      title: title,
      body: body,
    });
    saveNotes(notes);
    console.log(chalk.green.inverse("New note added!"));
  } else {
    console.log(chalk.red.inverse("Note title taken!"));
  }
};

// Remove
const removeNote = (title) => {
  let notes = loadNote();
  let notesToKeep = notes.filter((note) => note.title !== title);
  if (notes.length > notesToKeep.length) {
    console.log(chalk.green.inverse("Note removed!"));
    saveNotes(notesToKeep);
  } else {
    console.log(chalk.red.inverse("No note found!"));
  }
};

// List Notes
const listNotes = () => {
  console.log(chalk.inverse("Your notes"));
  let notes = loadNote();
  notes.forEach((note) => console.log(chalk.magenta.bold(note.title)));
};

// Read
const readNote = (title) => {
  let notes = loadNote();
  note = notes.find((note) => note.title === title);
  if (note) {
    console.log(chalk.inverse(note.title));
    console.log(chalk.magenta(note.body));
  } else {
    console.log(chalk.red.inverse("Title not found!"));
  }
};

const saveNotes = (notes) => {
  let dataJSON = JSON.stringify(notes);
  fs.writeFileSync("notes.json", dataJSON);
};

const loadNote = () => {
  try {
    let dataBuffer = fs.readFileSync("notes.json");
    let dataJSON = dataBuffer.toString();
    return JSON.parse(dataJSON);
  } catch (e) {
    return [];
  }
};

module.exports = {
  addNote: addNote,
  removeNote: removeNote,
  listNotes: listNotes,
  readNote: readNote,
};
