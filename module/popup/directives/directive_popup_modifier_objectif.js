angular
  .module('mathrixApp.popup')
  .directive('popupModifierObjectif',['userStatus','$state', function(userStatus,$state) {
    return {
      restrict: 'A',


      templateUrl : '/partials/directive/popup/modifier_objectif.html',

      controller : ['$scope','$element','extFunction','$rootScope','$analytics','$http','errorService','popupService',function($scope,$element,extFunction,$rootScope,$analytics,$http,errorService,popupService)
      {
        $scope.close = function(){
          $element.remove();
          popupService.closePopup('modifier_objectif');
        };



        $scope.save_coach_difficulte = function(){
        var difficulte = $scope.coach_difficulte; //Pour eviter les doublons
        $http.post('/api/user/daily_objectif',{
          difficulte : difficulte
        }).then(function(){
          userStatus.set('dailyPointsObjectif',difficulte);
          $rootScope.$broadcast('update_objectif');
          $scope.close();
        },function(){
          errorService.new('Daily Objectif');
        });

        };

        //Main
        $scope.coach_difficulte = userStatus.status.dailyPointsObjectif;
        //Fin Main

    }]
  };
      }]);
