angular
  .module('mathrixApp.popup')
  .directive('popupNewRank',['userStatus', function(userStatus) {
    return {
      restrict: 'A',
      scope : {
        rank : '='
      },

      templateUrl : '/partials/directive/popup/newRank.html',

      controller : ['$scope','$element','popupService','ngAudio','constantService',function($scope,$element,popupService,ngAudio,constantService)
      {
        $scope.close = function(){
          $element.remove();
          popupService.closePopup('new_rank');
        };
        ngAudio.play(constantService.audio.niveau_up);
    }]
  };
      }]);
