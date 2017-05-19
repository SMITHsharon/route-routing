app.controller("PacCoastHwyCtrl", function($location, $scope) {

	$scope.highwayDescription = false;
	$scope.highwayName = "Pacific Coast Highway";

	$scope.showDescription = () => {
		$scope.highwayDescription = true;
	};

	$scope.returnHome = () => {
		$location.url("/home");
	};

});