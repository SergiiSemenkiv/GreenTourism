app.controller('PointsList', ['$scope', '$https',
  function($cope, $http){
    $http.get('fixtures/points.json').success(function(data){
      $scope.points = data;
    });
     
}]);
