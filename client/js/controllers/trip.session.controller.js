app.controller('TripSessionController', function($scope, $stateParams, $trips, $weather, $interval){
	$scope.id = $stateParams.tripId;

	$scope.getSnapshots = function(){
		$trips.getSnapshots($scope.id).then(function(data){
			$scope.snapshots = data.data;
		});
	}

	$scope.addFish = function(){
		$weather.getWeather().then(function(response){
			$scope.snapshot = response.snapshot;
			$scope.snapshot.tripId = $scope.id;
			$scope.snapshot.timestamp = Date.now();

			$trips.createSnapshot(JSON.stringify($scope.snapshot)).then(function(data){
				$scope.getSnapshots();
			});

		});
	};
	
	$scope.getSnapshots();

});