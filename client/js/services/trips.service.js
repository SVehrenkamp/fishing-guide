app.service('$trips', function($http){
	return {
		getTrips: function(params){
			
			var promise = $http.get('http://localhost:3000/api/trips').success(function(response){
				console.log(response);
				return response;
			});
			return promise;
		},
		postData: function(data){
			$http.post('http://localhost:3000/api/trips', data).success(function(data, status){
				console.log(status);
			});
		}
	};
	
});