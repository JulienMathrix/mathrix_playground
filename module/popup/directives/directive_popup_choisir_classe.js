angular
  .module('mathrixApp.popup')
  .directive('popupChoisirClasse',['userStatus','$rootScope', function(userStatus,$rootScope) {
    return {
      restrict: 'A',
      scope: {
        item : '=',
      },
      templateUrl : '/partials/directive/popup/choisir_classe.html',

      controller : ['$scope','objectMathrix','$analytics','$state','userStatus','$element','popupService','$rootScope','$http',function($scope,objectMathrix,$analytics,$state,userStatus,$element,popupService,$rootScope,$http)
      {

        $scope.smartphoneVersion = $rootScope.globalProp.smartphoneVersion;

        $scope.close = function(){
          $element.remove();
          popupService.closePopup('choisir_classe');
        };




          $scope.changeClasse = function(urlClasse)
          {

            var classe = objectMathrix.getClasse(urlClasse,'url');
            userStatus.set('derniere_session_doublet_id',objectMathrix.getDoublet('maths-fr','url').id);
            userStatus.set('derniere_session_classe_id',objectMathrix.getClasse(urlClasse,'url').id);

            $http.post('/api/user/dernieresession',{
              doublet_id : objectMathrix.getDoublet('maths-fr','url').id,
              classe_id : objectMathrix.getClasse(urlClasse,'url').id
            })
            $state.go('startPoint');
            $scope.close();

          };
      }]
    };

      }]);
