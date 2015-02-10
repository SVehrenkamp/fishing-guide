app.controller('TripController', function($scope, $trips, $weather, $location, ipCookie, $log){

	//console.log('MainController Initialized::', $cookies);
	//GET Location
	$scope.isLoading = true;
    $scope.map = {center: {latitude: 40.1451, longitude: -99.6680 }, zoom: 4 };
	$scope.marker = {
      id: 0,
      coords: {
        latitude: 40.1451,
        longitude: -99.6680
      },
      options: { draggable: true },
      events: {
        dragend: function (marker, eventName, args) {
          $log.log('marker dragend');
          var lat = marker.getPosition().lat();
          var lon = marker.getPosition().lng();
          $log.log(lat);
          $log.log(lon);

          $scope.marker.options = {
            draggable: true,
            labelContent: "lat: " + $scope.marker.coords.latitude + ' ' + 'lon: ' + $scope.marker.coords.longitude,
            labelAnchor: "100 0",
            labelClass: "marker-labels"
          };
        }
      }
    };
	$scope.setLoadingScreen = function(){
		console.log('done loading!');
		$scope.isloading = 'false';
		return;
	}

	$scope.setLocation = function(location){
		console.log('Location::',location);
		var coords = {
			latitude: location.coords.latitude,
			longitude: location.coords.longitude
		};
		ipCookie('lat', coords.latitude);
		ipCookie('long', coords.longitude);
		
		$scope.$apply(function(){
			$scope.isLoading = false;
			
	$weather.getWeather().then(function(response){
		console.log('CONTROLLER::', response);
		$scope.data = response;
		$scope.initialTripData = response.data;
		$scope.initialSnapshot = response.snapshot;
	});

		});

	}
	$scope.getLocation = function(){
		navigator.geolocation.getCurrentPosition($scope.setLocation);
		console.log('Getting Location..');
	}

	$scope.getLocation();


	// $trips.getTrips().then(function(resp){
	// 	$scope.trips = resp.data;
	// });

	$scope.createTrip = function(){
		$trips.createTrip(JSON.stringify($scope.initialTripData)).success(function(data){
			
			$scope.initialSnapshot.tripId = data.id;
			$scope.initialSnapshot.timestamp = Date.now();
			console.log($scope.initialSnapshot);
			
			$trips.createSnapshot(JSON.stringify($scope.initialSnapshot)).success(function(data){
				$location.url('trips/'+$scope.initialSnapshot.tripId);
			});	
		});
		
	};

});