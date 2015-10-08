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

            //temp for current weather
          $scope.todayOne = response.data.list[7].main.temp;

          //conversion of kelvein to farenheight
          $scope.tempOne = Math.round(($scope.todayOne - 273.15) * 1.8 + 32);

          //finding the date
          $scope.oldDateOne = response.data.list[7].dt_txt;
          var newOneDate = $scope.oldDateOne.split(" ");
          $scope.dateOne = newOneDate[0];

           // GETTING THE DAY FROM THE DATE
          $scope.day1 = $scope.dateOne.split("-");
          $scope.dd1 = $scope.day1[2];

          ////CONVERSION OF THE DATE FROM API TO ALPHABETICAL DATE
          var gsDayNames1 = new Array(
            'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
          var gsMonthNames1 = new Array(
            'JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC');
          console.log($scope.dateOne);

          var d = new Date($scope.dateOne);
           $scope.dateOne1= gsDayNames1[d.getDay()] + " " + gsMonthNames1[d.getMonth()] + " " + $scope.dd1 ;
           console.log($scope.dateOne1);

          //***************************** day two's weather *************************

          //description of current weather
          $scope.mainTwo = response.data.list[15].weather[0].description;

          //set icon for day two's weather id
          $scope.idTwo = response.data.list[15].weather[0].id;
            if ($scope.idTwo >= 200 && $scope.idTwo <= 299){
              $scope.iconTwo = "thunderstorm.png";
            }if ($scope.idTwo >= 300 && $scope.idTwo <= 399){
              $scope.iconTwo = "drizzle.png";
            }else if ($scope.idTwo >= 500 && $scope.idTwo <= 599){
              $scope.iconTwo = "rain.png";
            }else if ($scope.idTwo >= 600 && $scope.idTwo <= 699){
              $scope.iconTwo = "snow.png";
            }else if ($scope.idTwo >= 700 && $scope.idTwo <= 799){
              $scope.iconTwo = "atmosphere.png";
            }else{ ($scope.idTwo >= 800 && $scope.idTwo <= 899)
              $scope.iconTwo = "clouds.png";
            };


          //temp for current weather
          $scope.todayTwo = response.data.list[15].main.temp;

          //conversion of kelvein to farenheight
          $scope.tempTwo = Math.round(($scope.todayTwo - 273.15) * 1.8 + 32);

          //finding the date
          $scope.oldDateTwo = response.data.list[15].dt_txt;
          var newDateTwo = $scope.oldDateTwo.split(" ");
          $scope.dateTwo = newDateTwo[0];

          // GETTING THE DAY FROM THE DATE
          $scope.day2 = $scope.dateTwo.split("-");
          $scope.dd2 = $scope.day2[2];

          ////CONVERSION OF THE DATE FROM API TO ALPHABETICAL DATE
          var gsDayNames2 = new Array(
             'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
          var gsMonthNames2 = new Array(
            'JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC');

          var d = new Date($scope.dateTwo);
           $scope.dateTwo2= gsDayNames2[d.getDay()] + " " + gsMonthNames2[d.getMonth()] + " " + $scope.dd2 ;

          //***************************** day threes's weather *************************

          //description of current weather
          $scope.mainThree = response.data.list[22].weather[0].description;

          //set icon for day three's weather
          $scope.idThree = response.data.list[22].weather[0].id;
          if ($scope.idThree >= 200 && $scope.idThree <= 299){
              $scope.iconThree = "thunderstorm.png";
            }if ($scope.idThree >= 300 && $scope.idThree <= 399){
              $scope.iconThree = "drizzle.png";
            }else if ($scope.idThree >= 500 && $scope.idThree <= 599){
              $scope.iconThree = "rain.png";
            }else if ($scope.idThree >= 600 && $scope.idThree <= 699){
              $scope.iconThree = "snow.png";
            }else if ($scope.idThree >= 700 && $scope.idThree <= 799){
              $scope.iconThree = "atmosphere.png";
            }else{ ($scope.idThree >= 800 && $scope.idThree<= 899)
              $scope.iconThree = "clouds.png";
            };

          //temp for current weather
          $scope.todayThree = response.data.list[22].main.temp;

          //conversion of kelvein to farenheight
          $scope.tempThree = Math.round(($scope.todayThree - 273.15) * 1.8 + 32);

          // test to see if we get the right data with rignt date
          $scope.description = response.data.list[22].main.humidity;
          console.log($scope.description);


          //finding the date from api
          $scope.oldDateThree = response.data.list[22].dt_txt;
          var newDateThree = $scope.oldDateThree.split(" ");
          $scope.dateThree = newDateThree[0];

          // GETTING THE DAY FROM THE DATE
          $scope.day3 = $scope.dateThree.split("-");
          $scope.dd3 = $scope.day3[2];
          console.log($scope.dd3);


          ////CONVERSION OF THE DATE FROM API TO ALPHABETICAL DATE
          var gsDayNames3 = new Array(
             'MON', 'TUE', 'WED', 'THU', 'FRI', 'SAT', 'SUN');
          var gsMonthNames3 = new Array(
            'JAN', 'FEB', 'MARCH', 'APRIL', 'MAY', 'JUNE', 'JULY', 'AUG', 'SEPT', 'OCT', 'NOV', 'DEC');

          var d = new Date($scope.dateThree);
           $scope.dateThree3= gsDayNames3[d.getDay()] + " " + gsMonthNames3[d.getMonth()] + " " + $scope.dd3 ;
    });

          //***************************** end of day threes's weather ************************
    };
  }]);


