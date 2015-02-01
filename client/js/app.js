//Initialize App
var app = angular.module('app', ['ngResource', 'ngTouch', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root', {
			url: '/',
			templateUrl: 'js/views/_main.html'
		})
		.state('about', {
			url: '/about',
			templateUrl: 'js/views/_about.html'
		})
		.state('trips', {
			url: '/trips',
			templateUrl: 'js/views/_trips.html'
		});
});