var mongoose = require('mongoose');
mongoose.connect('mongodb://localhost/agenda');

var agendaSchema = new mongoose.Schema({
    nome: {type: String},
    telefone:{type: String}, 
    operadora:{type: String}
});

var Agenda = mongoose.model('agenda', agendaSchema);
module.exports = Agenda;