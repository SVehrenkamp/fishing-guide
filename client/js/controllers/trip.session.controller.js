app.controller('TripSessionController', function($scope, $stateParams, $trips){
	$scope.id = $stateParams.tripId;
	$trips.getSnapshots($scope.id).then(function(resp){
		//console.log('Snapshot::', resp.data.snapshots);
		$scope.snapshots = resp.data.snapshots;
	});

});