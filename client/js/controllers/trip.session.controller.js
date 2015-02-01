app.controller('TripSessionController', function($scope, $stateParams, $trips){
	$scope.id = $stateParams.tripId;
	$trips.getSnapshots($scope.id).then(function(resp){
		$scope.snapshots = resp;
	});

});