angular.module('myApp').controller('AgendaController', AgendaController);

function AgendaController($http, $scope){
	$http.get('/json').success(function(retorno) {
		$scope.agendas = retorno.agendas;
	});

	function Agenda(){
		this.nome   	= '';
		this.telefone  	= '';
		this.operadora  = '';
	};

	$scope.agenda = new Agenda();


	$scope.editaContato = function(agenda){
		$scope.agenda = agenda;
		console.log($scope.agenda);
	};

	$scope.enviaContato = function(){
		if($scope.agenda._id){
			atualizaContato();
		}else{
			adicionaContato();
		};
	};

	var adicionaContato = function(){
		$http.post('/grava', $scope.agenda).success(function(retorno){
            $scope.agenda = new Agenda(); //limpar formulario
            alert('Contato Adicionado');
            AgendaController(http);
			console.log(retorno);
		});
	};

	
	var atualizaContato = function(){
		$http.put('/agenda', $scope.agenda).success(function(retorno){
			$scope.agenda = new Agenda(); //limpar formulario
            alert('Contato Alterado');
			console.log(retorno);
		});
	};

	$scope.deletaContato = function(agenda){
		$http.delete('/remove/' + agenda._id).success(function(retorno){
			$scope.agenda = null;
			var index = $scope.agendas.indexOf(agenda);
			$scope.agendas.splice(index, 1);
			console.log(retorno)
		});	
	};
};

