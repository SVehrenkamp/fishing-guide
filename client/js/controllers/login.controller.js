app.controller('LoginController', function($scope, $rootScope, User, $location){
	$scope.credentials = {};
	$scope.user = {};
	$scope.login = function(){
		$scope.loginResult = User.login($scope.credentials,
			function(data){
				//success
				console.log('You Have Successfully Logged In!', data);
				$rootScope.user = User.getCurrent();
				$location.url('/');
			},
			function(res){
				//error
				console.log('ERROR::', res);
			});
	}
});