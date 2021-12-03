const yargs = require("yargs");
const { readNote } = require("./notes.js");
const notes = require("./notes.js");

// add, remove, read, list

//add

yargs.command({
  command: "add",
  describe: "add a new node",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
    body: {
      type: "string",
      demandOption: true,
      describe: "Note Body",
    },
  },
  handler: function (argv) {
    notes.addNote(argv.title, argv.body);
  },
});

//create remove command

yargs.command({
  command: "remove",
  describe: "remove a node",
  builder: {
    title: {
      describe: "Note title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    notes.removeNote(argv.title);
  },
});

//list command

yargs.command({
  command: "list",
  describe: "lists the command",
  handler: function () {
    notes.listNotes();
  },
});

//read command

yargs.command({
  command: "read",
  describe: "read a node",
  builder: {
    title: {
      describe: "Note Title",
      demandOption: true,
      type: "string",
    },
  },
  handler: function (argv) {
    readNote(argv.title);
  },
});

yargs.parse();
