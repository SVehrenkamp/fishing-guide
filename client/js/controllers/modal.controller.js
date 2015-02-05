app.controller('ModalController', function($scope, $modalInstance, addFish){
	$scope.addFish = addFish;
	$scope.ok = function(){
		$scope.addFish();
		$modalInstance.dismiss();
		console.log('Fish Added!');
	}
	$scope.cancel = function(){
		$modalInstance.dismiss();
	}
});