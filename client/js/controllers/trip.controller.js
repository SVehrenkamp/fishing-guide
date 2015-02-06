app.controller('TripController', function($scope, $trips, $weather, $location, ipCookie){

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
			
	$weather.getWeather().then(function(response){
		console.log('CONTROLLER::', response);
		$scope.data = response;
		$scope.initialTripData = response.data;
		$scope.initialSnapshot = response.snapshot;
	});

		});

	}
	$scope.getLocation = function(){
		navigator.geolocation.getCurrentPosition($scope.setLocation);
		console.log('Getting Location..');
	}

	$scope.getLocation();


	// $trips.getTrips().then(function(resp){
	// 	$scope.trips = resp.data;
	// });

	$scope.createTrip = function(){
		$trips.createTrip(JSON.stringify($scope.initialTripData)).success(function(data){
			
			$scope.initialSnapshot.tripId = data.id;
			$scope.initialSnapshot.timestamp = Date.now();
			console.log($scope.initialSnapshot);
			
			$trips.createSnapshot(JSON.stringify($scope.initialSnapshot)).success(function(data){
				$location.url('trips/'+$scope.initialSnapshot.tripId);
			});	
		});
		
	};

});