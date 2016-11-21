angular
  .module('mathrixApp.popup')
  .directive('popupReloadPage',['$timeout','$window', function($timeout,$window) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/reload_page.html',

      controller : ['$scope','$interval',function($scope,$interval)
      {
        var timeReload = 5;
        $scope.reload = timeReload;
        $interval(function(){
          $scope.reload-=1;
          if($scope.reload == 0){
            $window.location.reload();
          }
        },1000);
      }]
  };
      }]);
