angular
  .module('mathrixApp.popup')
  .directive('popupSupprimerCompte',['userStatus', function(userStatus) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/supprimer_compte.html',

      controller : ['$scope','objectMathrix','$analytics','$state','userStatus','$element','popupService','$http','extFunction','errorService',function($scope,objectMathrix,$analytics,$state,userStatus,$element,popupService,$http,extFunction,errorService)
      {


        //Main

         //Fin Main


        $scope.close = function(){
          $element.remove();
          popupService.closePopup('supprimer_compte');
        };






      }]
    };

      }]);
