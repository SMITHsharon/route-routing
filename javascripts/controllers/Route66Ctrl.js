app.controller("Route66Ctrl", function($location, $scope) {

	$scope.highwayDescription = false;
	$scope.highwayName = "Route 66";
	$scope.background = "/images/route%2066.jpeg";

	$scope.showDescription = () => {
		$scope.highwayDescription = true;
	};

	$scope.returnHome = () => {
		$location.url("/home");
	};

});