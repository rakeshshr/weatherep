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

   controller('MainCtrl', ['$scope', '$http', function ($scope, $http) {
    $scope.photos = [];

    $scope.searchCity = function () {
      var city = $scope.city.replace(/\s+/, '');
      $scope.currentCity = $scope.city;
      var weatherUrl = "http://api.openweathermap.org/data/2.5/forecast?&q="  + city + "&type=accurate&,us&mode=json&callback=JSON_CALLBACK";
        $http.jsonp(weatherUrl)
        .then(function (response) {
          //error handling if city  not found or no response
          if (response == undefined || response == null){
            alert("No City Found!");
          }else{
            $scope.city = '';
            $scope.weather = response.data;
          };

          //***************************** Today's weather *************************

          //description of current weather
          $scope.main = response.data.list[0].weather[0].description;

          // set icon for current weather id
          $scope.id = response.data.list[0].weather[0].id;
            if ($scope.id >= 200 && $scope.id <= 299){
              $scope.icon = "thunderstorm.png";
            }if ($scope.id >= 300 && $scope.id <= 399){
              $scope.icon = "drizzle.png";
            }else if ($scope.id >= 500 && $scope.id <= 599){
              $scope.icon = "rain.png";
            }else if ($scope.id >= 600 && $scope.id <= 699){
              $scope.icon = "snow.png";
            }else if ($scope.id >= 700 && $scope.id <= 799){
              $scope.icon = "atmosphere.png";
            }else{ ($scope.id >= 800 && $scope.id <= 899)
              $scope.icon = "clouds.png";
            };

