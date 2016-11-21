angular
  .module('mathrixApp.popup')
  .directive('popup404',['$timeout','$window', function($timeout,$window) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/404.html',

      controller : ['$scope','$interval','$state',function($scope,$interval,$state)
      {

        $scope.close = function(){
          $element.remove();
          popupService.closePopup('404');
        };

        $scope.goHomepage = function(){
          $state.go('startingPoint');
          $scope.close();

        };
      }]
  };
      }]);
