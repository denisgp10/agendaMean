// ExpressJS - Backend

//banco de dados
var Agenda = require('../models/database.js');

// retorna a pagina index
exports.index = function(req, res) {
	res.render('index.html');
};

// retorna a pagina /lista
exports.lista = function(req, res) {
    Agenda.find({}, function(erro, agendas){
		res.json({agendas: agendas});
	});
};

exports.listaId = function(req, res) {
	Agenda.findOne({_id: req.params.id}, function(erro, agendas){
		res.json({agendas: agendas});
	});
};

exports.grava = function(req, res) {
    var agenda = new Agenda(req.body);
    agenda.save(function(error, agenda){
       if(error) return console.log(error);
    	 res.send('Contato > ' + agenda.nome + ' salvo com sucesso');
    });
};

exports.remove = function(req, res){
  // Criando a query para remover a contato pelo _id
  var id = req.params.id;
  Agenda.findByIdAndRemove(id, function(err, agenda) {
    res.send('Contato >' + agenda.nome + ' removido com sucesso');
  });
};

exports.atualiza = function(req, res){
  var id = req.body._id;
  Agenda.findByIdAndUpdate(id, req.body, function(err, agenda){
     res.send('Contato >' + agenda.nome + ' atualiza com sucesso');
  });
};
