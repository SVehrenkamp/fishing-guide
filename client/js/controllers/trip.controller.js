app.controller('TripController', function($scope, $trips, $weather){
	
	$weather.getWeather().then(function(response){
		response = response.data;
		var weatherData = {
				start_time: Date.now(),
				origin : [{
					city : response.current_observation.display_location.city,
					state : response.current_observation.display_location.state,
					zip : response.current_observation.display_location.zip,
					latitude : response.current_observation.display_location.latitude,
					longitude : response.current_observation.display_location.longitude
				}],
				snapshots : [{
					origin : [{
						city : response.current_observation.display_location.city,
						state : response.current_observation.display_location.state,
						zip : response.current_observation.display_location.zip,
						latitude : response.current_observation.display_location.latitude,
						longitude : response.current_observation.display_location.longitude
					}],
					temperature : response.current_observation.temp_f,
					dewpoint : response.current_observation.dewpoint_f,
					
					humidity : response.current_observation.relative_humidity,
					pressure : {
						mb : response.current_observation.pressure_mb,
						in : response.current_observation.pressure_in,
						trend : response.current_observation.pressure_trend
					},
					condition : response.current_observation.weather,
					wind : {
						speed : response.current_observation.wind_mph,
						direction : response.current_observation.wind_dir
					}
				}]

			};

		$scope.weather = weatherData;
	});

	$trips.getTrips().then(function(resp){
		$scope.trips = resp.data;
	});

	$scope.postData = function(){
		$trips.postData(JSON.stringify($scope.weather));
		$trips.getTrips().then(function(resp){
		$scope.trips = resp.data;
	});
	};

});