app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/Route66', {
      templateUrl: 'partials/route66.html',
      controller: 'Route66Ctrl'
    })
    .when('/PacificCoastHwy', {
      templateUrl: 'partials/pacCoastHwy.html',
      controller: 'PacCoastHwyCtrl'
    })

    .otherwise('/home'); // default catch
});