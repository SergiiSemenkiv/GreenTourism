app.controller('PointsListCtrl', ['$scope', '$https',
  function($scope, $http){
    $http.get('fixtures/points.json').success(function(data){
      $scope.points = data;
      for(point in points){
        marker = L.marker([v, h]).addTo(map);  
      }
    });
     
}]);
