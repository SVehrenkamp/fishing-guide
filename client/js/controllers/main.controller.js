app.controller('MainController', function($scope, ipCookie, $weather, $trips, $location){
	
	//console.log('MainController Initialized::', $cookies);
	//GET Location
	$scope.isLoading = true;
	
	$scope.setLoadingScreen = function(){
		console.log('done loading!');
		$scope.isloading = 'false';
		return;
	}

	$scope.setLocation = function(location){
		console.log('Location::',location);
		var coords = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		};
		ipCookie('lat', coords.latitude);
		ipCookie('long', coords.longitude);
		
		$scope.$apply(function(){
			$scope.isLoading = false;
		});

	}
	$scope.getLocation = function(){
		navigator.geolocation.getCurrentPosition($scope.setLocation);
		console.log('Getting Location..');
	}

	$scope.getLocation();
});