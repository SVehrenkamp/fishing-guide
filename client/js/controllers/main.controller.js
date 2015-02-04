app.controller('MainController', function($scope, $cookieStore, $weather, $trips, $location){
	
	//console.log('MainController Initialized::', $cookies);
	//GET Location
	$scope.setLocation = function(location, coords){
		console.log('Location::',location);
		coords = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		};
		$cookieStore.put('lat', coords.latitude);
		$cookieStore.put('long', coords.longitude);

	}
	$scope.getLocation = function(){
		navigator.geolocation.getCurrentPosition($scope.setLocation);
		console.log('Getting Location..');
	}

	$scope.getLocation();
});