var Agenda = require('./models/database.js');

var agenda = new Agenda({
	nome: 'denis',
	telefone: '0000000',
	operadora: 'Oi'
});

agenda.save(function(erro, agenda){
	if(erro) console.log(erro);

	console.log('Gravando - ' + agenda.nome);
});
