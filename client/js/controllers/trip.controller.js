app.controller('TripController', function($scope, $trips, $weather){
	$weather.getWeather();
	$trips.getTrips().then(function(resp){
		$scope.test = resp.data[0].start_time;
	});
});