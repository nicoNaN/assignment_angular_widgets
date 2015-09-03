var widgets = angular.module('widgets', []);

widgets.controller('RestaurantCtrl', ['$scope',

  function($scope) {

    $scope.restaurants = [];

    $scope.sortType = "name";
    $scope.sortReverse = false;

    $scope.removeRes = function(index) {
      alert(index);
      $scope.restaurants.splice(index, 1);
    }

    $scope.createRestaurant = function() {
      var newRes = { name: $scope.resName,
                     type: $scope.resType,
                     logo: $scope.resLogo };
      $scope.restaurants.push(newRes);
      $scope.resName = "";
      $scope.resType = "";
    }

}])
