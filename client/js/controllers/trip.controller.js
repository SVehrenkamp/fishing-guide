app.controller('TripController', function($scope, $trips, $weather, $location){
	
		$weather.getWeather().then(function(response){
			console.log('CONTROLLER::', response);
			$scope.data = response;
			$scope.initialTripData = response.data;
			$scope.initialSnapshot = response.snapshot;
		});

	$trips.getTrips().then(function(resp){
		$scope.trips = resp.data;
	});

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