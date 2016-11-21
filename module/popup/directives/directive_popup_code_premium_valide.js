angular
  .module('mathrixApp.popup')
  .directive('popupCodePremiumValide',['userStatus', function(userStatus) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/code_premium_valide.html',

      controller : ['$scope','objectMathrix','$analytics','$state','userStatus','$element','popupService','$http','extFunction','errorService',function($scope,objectMathrix,$analytics,$state,userStatus,$element,popupService,$http,extFunction,errorService)
      {


        //Main
        $scope.email_is_changed = false;
        $scope.new_email = '';
        $scope.error_email_message = undefined;
         //Fin Main


        $scope.close = function(){
          $element.remove();
          popupService.closePopup('code_premium_valide');
          $state.go('startPoint');

        };






      }]
    };

      }]);
