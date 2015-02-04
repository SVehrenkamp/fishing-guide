//Initialize App
var app = angular.module('app', ['ngResource', 'ngCookies', 'ngTouch', 'ui.router']);

app.config(function($stateProvider, $urlRouterProvider){
	$urlRouterProvider.otherwise('/');
	$stateProvider
		.state('root', {
			url: '/',
			views: {
				'app' : {
					templateUrl: 'js/views/_main.html',
					controller: 'MainController'
				}
			}
		})
		.state('about', {
			url: '/about',
			views: {
				'body' : {
					templateUrl: 'js/views/_about.html'
				}
			}
		})
		.state('trips', {
			url: '/trips',
			views: {
				'body' : {
					templateUrl: 'js/views/_trips.html'
				}
			}
		}).state('trip', {
			url: '/trips/:tripId',
			views: {
				'body' : {
					templateUrl: 'js/views/_trips.trip.html',
					controller: 'TripSessionController'
				}
			}
		});
});