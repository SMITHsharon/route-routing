app.controller("route66Ctrl", function($location, $scope) {

	$scope.highwayDescription = false;
	$scope.highwayName = "Route 66";

	$scope.showDescription = () => {
		$scope.highwayDescription = true;
	};

	$scope.returnHome = () => {
		$location.url("/home");
	};

});