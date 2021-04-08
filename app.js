// const validator = require("validator");
const chalk = require("chalk");
const yargs = require("yargs");
const notes = require("./notes");

// Customize yargs version
yargs.version("1.1.0");

/*
 * node app.js --help ==> Show all commands you're created in app.js file
 * u are should use [describe] property in [yargs.command] object to appear the command when using --help
 *
 * yargs.parse() || console.log(yargs.argv) ==> use it to output [--help] result, without it [--help] result doesn't appear
 * use [yargs.command()] object ==> to create a new command and give it description to appear in --help and give it function[handler] to execute..
 */

// Create add Command
yargs.command({
  command: "add",
  describe: "Add a new note!",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
    body: {
      describe: "Note body",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.addNote(argv.title, argv.body);
  },
});

// Create remove command
yargs.command({
  command: "remove",
  describe: "Remove a specific note",
  builder: {
    title: {
      describe: "Remove Specific note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.removeNote(argv.title);
  },
});

// Create list command
yargs.command({
  command: "list",
  describe: "List Notes form A-Z",
  handler() {
    notes.listNotes();
  },
});

//Create read command
yargs.command({
  command: "read",
  describe: "Read a Specific note",
  builder: {
    title: {
      describe: "Read specific note",
      demandOption: true,
      type: "string",
    },
  },
  handler(argv) {
    notes.readNote(argv.title);
  },
});

// add, remove, read, list

yargs.parse();

// node app.js add --title="" --body=""
// node app.js remove --title=""
// node app.js list
// node app.js read --title=""
