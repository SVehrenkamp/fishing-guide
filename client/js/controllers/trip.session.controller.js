app.controller('TripSessionController', function($scope, $stateParams, $trips){
	$scope.id = $stateParams.tripId;
	$trips.getSnapshots($scope.id).then(function(resp){
		console.log('HEAD::', resp);
		$scope.head = resp;
		$scope.snapshots = resp.snapshot;
	});

	$scope.addFish = function(){
		alert('FISH ADDED!!');
	};

});