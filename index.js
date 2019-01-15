const yargs=require('yargs');


const notes=require('./notes.js');

const titleOptions={
				describe:'Title of note',
				demand:true,
				alias:'t'
};

const bodyOptions={
		describe:'Body of the note',
				demand:true,
				alias:'b'
};


const argv=yargs
		.command('add','Add a new note',{
			title:titleOptions,
			body:bodyOptions
			
		})
		.command('list','List all notes')
		.command('read','Read a note',{
			title:titleOptions
		})
		.command('remove','Remove the note',{
			title:titleOptions
		})
		.help()
		.argv;

var command=argv._[0];

if(command==="add"){
	var note=notes.addNote(argv.title,argv.body);
	if(note){
		notes.logNote(note);
	}else{
		console.log('note title taken');
	}
}else if(command==="remove"){
	var noteRemoved=notes.removeNote(argv.title);
	
	var message=noteRemoved ? 'note was removed' : 'note not found' ;
	console.log(message);
	
}else if(command==="read"){
	var note=notes.getNote(argv.title);
	if(note){
		notes.logNote(note);
	}else{
		console.log('note not found');
	}
}else if(command==="list"){
	var allNotes=notes.getAll();
	console.log(`printing ${allNotes.length} note(s)`);
	allNotes.forEach((note)=>notes.logNote(note));
}else{
	console.log('command not recognized!...');
}