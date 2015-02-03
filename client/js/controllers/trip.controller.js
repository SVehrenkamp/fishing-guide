app.controller('TripController', function($scope, $trips, $weather, $location){
	
	$weather.getWeather().then(function(response){
		console.log('CONTROLLER::', response);
		
		$scope.initialTripData = response.data;
		$scope.initialSnapshot = response.snapshot;
	});

	$trips.getTrips().then(function(resp){
		$scope.trips = resp.data;
	});

	$scope.createTrip = function(){
		$trips.createTrip(JSON.stringify($scope.initialTripData)).success(function(data){
		
		$location.url('/trips/'+data.id);	
		});
		
	};

});