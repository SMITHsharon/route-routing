app.config(function($routeProvider) {
  $routeProvider
    .when('/home', {
      templateUrl: 'partials/home.html',
      controller: 'HomeCtrl'
    })
    .when('/Route66', {
      templateUrl: 'partials/Route66.html',
      controller: 'route66Ctrl'
    })
    .when('/Pacific Coast Highway', {
      templateUrl: 'partials/pacCoastHwy.html',
      controller: 'PacCoastHwyCtrl'
    })

    .otherwise('/home'); // default catch
});