app.factory('$weather', function($http,$q, $cookieStore){
		
		var lat = ($cookieStore.get('lat')).toString();
		var long = ($cookieStore.get('long')).toString();
	return {
		key: "35cc6e75f95400aa",
		url: "http://api.wunderground.com/api/35cc6e75f95400aa/conditions/q/"+lat+","+long+".json",

		getWeather: function(params){
			var deferred = $q.defer();
			$http.get(this.url).success(function(response){	
				
			console.log(response);
				deferred.resolve({
					data: {
						start_time: Date.now(),
						origin : {
							city : response.current_observation.display_location.city,
							state : response.current_observation.display_location.state,
							zip : response.current_observation.display_location.zip,
							latitude : response.current_observation.display_location.latitude,
							longitude : response.current_observation.display_location.longitude
						}
					},
					snapshot : {
						origin : {
							city : response.current_observation.display_location.city,
							state : response.current_observation.display_location.state,
							zip : response.current_observation.display_location.zip,
							latitude : response.current_observation.display_location.latitude,
							longitude : response.current_observation.display_location.longitude
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
			console.log(deferred.promise);
			return deferred.promise;
		}
	};
	
});