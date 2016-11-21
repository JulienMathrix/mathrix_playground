angular
  .module('mathrixApp.popup')
  .directive('popupObjectifAtteint',[function() {
    return {
      restrict: 'A',
      scope : {
        rank : '='
      },

      templateUrl : '/partials/directive/popup/objectif_atteint.html',

      controller : ['$scope','$element','popupService',function($scope,$element,popupService)
      {
        $scope.close = function(){
          $element.remove();
          popupService.closePopup('objectif_atteint');
        };
    }]
  };
      }]);
