app.service('$trips', function($http){
	return {
		getTrips: function(params){
			var promise = $http.get('http://localhost:3000/api/trips').success(function(response){
				//console.log(response);
				return response;
			});
			return promise;
		},
		getSnapshots: function(id){
			var promise = $http.get('http://localhost:3000/api/trips/'+id).success(function(response){
				console.log('Snapshot::', response);
				return response;
			});
			return promise;
		},
		createTrip: function(data){
			return $http.post('http://localhost:3000/api/trips', data);
		}
	};
	
});