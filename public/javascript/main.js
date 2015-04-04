var app = angular.module('myApp', ['ngRoute']);

app.config(function($routeProvider, $locationProvider){

// remove o # da url
$locationProvider.html5Mode(true);
	
	$routeProvider.when('/home', {
  		templateUrl: 'views/home.ejs',
  		controller: 'AgendaController'
	});

	$routeProvider.when('/contatos', {
  		templateUrl: 'views/contatos.ejs',
  		controller: 'AgendaController'
	});
	$routeProvider.otherwise({redirectTo: '/'});

});