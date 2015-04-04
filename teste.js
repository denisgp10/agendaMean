var Agenda = require('./models/database.js');

var agenda = new Agenda({
	nome: 'Isabela',
	telefone: '87735639',
	operadora: 'Oi'
});

agenda.save(function(erro, agenda){
	if(erro) console.log(erro);

	console.log('Gravando - ' + agenda.nome);
});