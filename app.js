//nodejs
var mongoose = require('mongoose');
var express = require('express');
var path = require('path');
var routes = require('./routes');
var bodyParser = require('body-parser');
var app = express();
//adicionando o middleware body parser
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
    extended: true
}));

app.set('views', path.join(__dirname, 'public/views'));
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile)
//definir rotas
app.get('/', routes.index);
app.get('/json', routes.lista);
app.get('/json/:id', routes.listaId);

app.post('/grava', routes.grava);
app.put('/agenda', routes.atualiza);
app.delete('/remove/:id', routes.remove);
// compartilha a pasta public
app.use(express.static(path.join(__dirname, 'public')));

//start server
app.set('port', process.env.port || 3000);

var server = app.listen(app.get('port'), function() {
	console.log('Servidor foi startado na porta ' + server.address().port);
});