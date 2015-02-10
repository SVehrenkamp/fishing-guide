//Initialize App
var app = angular.module('app', ['ngResource', 'ipCookie', 'ngTouch', 'ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps']);

app
	.config(function(uiGmapGoogleMapApiProvider) {
	    uiGmapGoogleMapApiProvider.configure({
	        key: 'AIzaSyCCPzv2FVkXMVLsppcE0GnTMACcx0bgUqA',
	        v: '3.17',
	        libraries: 'weather,geometry,visualization'
	    });
	})
	.config(function($stateProvider, $urlRouterProvider){
		$urlRouterProvider.otherwise('/');
		$stateProvider
			.state('root', {
				url: '/',
				views: {
					'body' : {
						templateUrl: 'js/views/_trips.html'
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