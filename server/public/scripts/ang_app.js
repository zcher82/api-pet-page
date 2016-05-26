var myApp = angular.module('myApp', ['ngRoute']);

myApp.config(['$routeProvider', function($routeProvider) {
  $routeProvider
    .when('/cats', {
      templateUrl: '/views/cats.html',
      controller: "CatsController"
    })
    .when('/dogs', {
      templateUrl: '/views/dogs.html',
      controller: "DogsController"
    })
    .when('/reptiles', {
      templateUrl: '/views/reptiles.html',
      controller: "ReptilesController"
    })
    .when('/home', {
      templateUrl: '/views/home.html',
      controller: "HomeController"
    })
    .otherwise({
      redirectTo: 'home'
    })
}]);

// myApp.controller('APIController', ['$scope', '$http', function($scope, $http) {
//   var key = 'cf570d77d5fc8f98502226a88b74bb56';
//   var baseURL = 'http://api.petfinder.com/';
//   $scope.breed = '';
//
//   $scope.getRandomPet = function() {
//     var query = 'pet.getRandom';
//     query += '?key=' + key;
//     //query += '&animal=dog';
//     query += '&output=basic';
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log(response.data);
//         $scope.animal = response.data.petfinder.pet;
//         $scope.breed = $scope.animal.animal.$t;
//         $scope.getBreeds();
//       }
//     )
//   }
//
//   $scope.getBreeds = function() {
//     var query = 'breed.list';
//     query += '?key=' + key;
//     query += '&animal=' + $scope.breed.toLowerCase();
//     query += '&format=json';
//
//     var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';
//
//     console.log(request);
//
//     $http.jsonp(request).then(
//       function(response) {
//         console.log('breeds: ', response.data);
//         $scope.breeds = response.data.petfinder.breeds.breed;
//       }
//     )
//   }
//
// }]);
