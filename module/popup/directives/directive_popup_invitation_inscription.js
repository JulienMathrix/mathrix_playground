angular
  .module('mathrixApp.popup')
  .directive('popupInvitationInscription',['userStatus', function(userStatus) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/invitation_inscription.html',

      controller : ['$scope','$element','popupService','popupService','$window','$analytics','$location',function($scope,$element,popupService,popupService,$window,$analytics,$location)
      {
        $analytics.pageTrack('/invitation_inscription');//#analytics
        //main
        $scope.smallPhone = angular.element($window).height()<600;


        //Fin Main
        $scope.close = function(){
          $element.remove();
          popupService.closePopup('invitation_inscription');
        };

        $scope.goInscription = function(){
          popupService.openPopup($scope,'inscription');
          $scope.close();
        };


        $scope.nonMerci = function(){
          $scope.close();
        };

    }]
  };
      }]);
