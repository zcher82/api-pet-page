myApp.controller('DogsController', ['$scope', '$http', function($scope, $http) {
  console.log('dog controller running');

  $scope.img = "http://allpetsstore.com/wp-content/uploads/2015/04/Pets-17.jpg";

  var key = 'cf570d77d5fc8f98502226a88b74bb56';
  var baseURL = 'http://api.petfinder.com/';
  $scope.breed = '';

  $scope.getRandomPet = function() {
    var query = 'pet.getRandom';
    query += '?key=' + key;
    query += '&animal=dog';
    query += '&output=basic';
    query += '&format=json';

    var request = baseURL + encodeURI(query) + '&callback=JSON_CALLBACK';

    console.log(request);

    $http.jsonp(request).then(
      function(response) {
        console.log(response.data);
        $scope.animal = response.data.petfinder.pet;
        $scope.breed = $scope.animal.animal.$t;
        //$scope.getBreeds();
      }
    )
  }

}]);
