const fs=require('fs');

var originalNote={
	title:'adarsh',
	body:'legend'
};

var originalNoteString=JSON.stringify(originalNote);

fs.writeFileSync('notes.json',originalNoteString);

var noteString=fs.readFileSync('notes.json');

var notes=JSON.parse(noteString);

console.log(typeof notes);
console.log(notes.title);
console.log(notes.body);
