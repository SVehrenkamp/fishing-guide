app.controller('ModalController', function($scope, $modalInstance, addFish){

	$scope.species = [
		'sunfish',
		'crappie',
		'bass',
		'ike',
		'catfish',
		'walleye',
		'sauger',
		'trout'

	];
	$scope.fish = {};
	$scope.selected = [];
	$scope.select = function($index){
		$scope.selected[$index] = true;
	}
	$scope.addFish = addFish;
	$scope.ok = function(){
		$scope.addFish($scope.fish);
		$modalInstance.dismiss();
		console.log('Fish Added!');
	}
	$scope.cancel = function(){
		$modalInstance.dismiss();
	}
});