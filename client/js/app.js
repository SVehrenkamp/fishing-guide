//Initialize App
var app = angular.module('app', ['ngResource', 'ipCookie', 'ngTouch', 'ui.router', 'ui.bootstrap', 'uiGmapgoogle-maps', 'lbServices']);

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
			}).state('root.trip', {
				url: ':tripId',
				templateUrl: 'js/views/_trips.trip.html',
				controller: 'TripSessionController'
			})
			.state('login', {
				url: '/user/login',
				views: {
					'body' : {
						templateUrl: 'js/views/_login.html',
						controller: 'LoginController'
					}
				}
			});
	});

		//Bootstrap App here
		var coords = {};
		var setLocation = function(location){

			//coords.latitude = location.coords.latitude;
			//coords.longitude = location.coords.longitude;
			//Set Coords as cookies
			//ipCookie('lat', this.coords.latitude);
			//ipCookie('long', this.coords.longitude);

			app.constant('coordinates', location.coords);
			console.log('Location::', location.coords);
			bootstrapApplication();

		}

		//Call the browser's geolocation method to get coords
		var getLocation = function(){
			navigator.geolocation.getCurrentPosition(this.setLocation);
			console.log('Getting Location..');
			return this;
		}
		var bootstrapApplication = function() {
        	angular.element(document).ready(function() {
        		angular.element('#loader').addClass('loaded');
            	angular.bootstrap(document, ["app"]);
        });
    }
		getLocation()