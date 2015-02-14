app.factory('$forecast_io', function($http,$q, ipCookie, coordinates){
		
	//convert bearing to cardinal direction
	getWindDirection = function(bearing){
		var direction;
		switch(true){
			case (bearing < 22.5):
				direction = "N";
				break;
			case (bearing < 45):
				direction = "NNE";
				break;
			case (bearing < 67.5):
				direction = "NE";
				break;
			case (bearing < 90):
				direction = "E";
				break;
			case (bearing  < 112.5):
				direction = "ESE";
				break;
			case (bearing < 135):
				direction = "SE";
				break;
			case (bearing < 157.5):
				direction = "SSE";
				break;
			case (bearing < 180):
				direction = "S";
				break;
			case (bearing < 202.5):
				direction = "SSW";
				break;
			case (bearing < 225):
				direction = "SW";
				break;
			case (bearing < 247.5):
				direction = "WSW";
				break;
			case (bearing < 270):
				direction = "W";
				break;
			case (bearing < 292.5):
				direction = "WNW";
				break;
			case (bearing < 315):
				direction = "NW";
				break;
			case (bearing < 337.5):
				direction = "NNW";
				break;
		}
		return direction;
	}

	getPressureInches = function(millibars){
		return (millibars  * 0.0295301);
	}




	return {
		key: "24afef7e6da9ac9b4819107bd7a9f4b0",

		getWeather: function(params){
			var lat = coordinates.latitude, 
				long = coordinates.longitude,
				deferred = $q.defer(),
				url ="https://api.forecast.io/forecast/24afef7e6da9ac9b4819107bd7a9f4b0/"+lat+","+long;
			$http.get(url).success(function(response){	
				
			console.log(response);
				deferred.resolve({
					data: {
						start_time: Date.now(),
						origin : {
							city : response.current_observation.display_location.city,
							state : response.current_observation.display_location.state,
							zip : response.current_observation.display_location.zip,
							latitude : coordinates.latitude,
							longitude : coordinates.longitude
						}
					},
					snapshot : {
						origin : {
							city : response.current_observation.display_location.city,
							state : response.current_observation.display_location.state,
							zip : response.current_observation.display_location.zip,
							latitude : coordinates.latitude,
							longitude : coordinates.longitude
						},
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
					}

				
				});
			});
			console.log('Promise::',deferred.promise);
			return deferred.promise;
		}
	};
	
});