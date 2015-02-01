app.service('$weather', function($http){
	return {
		key: "35cc6e75f95400aa",
		url: "http://api.wunderground.com/api/35cc6e75f95400aa/conditions/q/55904.json",
		getWeather: function(params){
			
			var promise = $http.get(this.url).success(function(response){	
				return response;
			});

			return promise;
		}
	};
	
});