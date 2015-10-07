angular.module('weatherep', ['ngRoute'])

   .config(['$routeProvider', '$locationProvider', function ($routeProvider, $locationProvider){
   	 $routeProvider
   	  .when('/' {
   	  	templateUrl: 'templates/search.html',
   	  	controller: 'MainCtrl'
   	  });
   	 $routeProvider
   	  .when('/about', {
   	  	templateUrl: 'templates/about.html',
   	  })

   	 $locationProvider.html5Mode({
   	 	enabled: true,
   	 	requireBase: false
   	 });
   }])