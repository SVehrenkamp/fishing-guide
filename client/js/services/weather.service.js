app.factory('$weather', function($http,$q, ipCookie, coordinates){
		
		// var lat = ipCookie('lat') ? ipCookie('lat').toString() : null;
		// var long = ipCookie('long') ? ipCookie('long').toString() : null;
		
		//console.log(lat, long, '::$weather');
	return {
		key: "35cc6e75f95400aa",
		//url: "http://api.wunderground.com/api/35cc6e75f95400aa/conditions/q/"+lat+","+long+".json",

		getWeather: function(params){
			var lat = coordinates.latitude, 
				long = coordinates.longitude,
				deferred = $q.defer(),
				url ="http://api.wunderground.com/api/35cc6e75f95400aa/conditions/q/"+lat+","+long+".json";
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