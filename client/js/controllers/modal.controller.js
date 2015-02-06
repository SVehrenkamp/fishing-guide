app.controller('ModalController', function($scope, $modalInstance, addFish){
	var fish = {
		'species' : 'bluegill',
		'size' : "8in",
		'lure' : {
			'type': 'jig',
			'size': '1/64oz',
			'color': 'glow red'
		}
	};
	$scope.addFish = addFish;
	$scope.ok = function(){
		$scope.addFish(fish);
		$modalInstance.dismiss();
		console.log('Fish Added!');
	}
	$scope.cancel = function(){
		$modalInstance.dismiss();
	}
});