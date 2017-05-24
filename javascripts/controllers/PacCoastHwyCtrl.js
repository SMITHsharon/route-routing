app.controller("PacCoastHwyCtrl", function($location, $scope) {

	$scope.highwayDescription = false;
	$scope.highwayName = "Pacific Coast Highway";
	$scope.background = "/images/Pacific%20Coast%20Highway%201.jpg";

	$scope.showDescription = () => {
		$scope.highwayDescription = true;
	};

	$scope.returnHome = () => {
		$location.url("/home");
	};

});