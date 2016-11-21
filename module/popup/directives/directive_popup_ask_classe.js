angular
  .module('mathrixApp.popup')
  .directive('popupAskClasse',['userStatus','$state', function(userStatus,$state) {
    return {
      restrict: 'A',


      templateUrl : '/partials/directive/popup/ask_classe.html',

      controller : ['$scope','$element','extFunction','$analytics','$http','$timeout','serviceFacebook','popupService','objectMathrix',function($scope,$element,extFunction,$analytics,$http,$timeout,serviceFacebook,popupService,objectMathrix)
      {
        $scope.close = function(){
          popupService.closePopup('ask_classe');
          $element.remove();
        };
        //Main
        $analytics.pageTrack('/fish_classe');
        $scope.classe = objectMathrix.classe;
        var doublet = objectMathrix.getDoublet('maths-fr','url');
        //Fin Main
        $scope.goClasse = function(classe){
        //Similaire au state : 'First' (faire un script commun dans un service?)

        //Si l'utilisateur avait deja la bonne classe, on retrouve l'index.



            userStatus.upgradeUserSession(objectMathrix.pays[0],classe,doublet);
            popupService.openPopup($scope,'invitation_inscription');
            $scope.close();
        };




        //Main
        $scope.showBoutonClasse = true;
        $scope.showMenuEnregistrer = false;
        //Fin Main

    }]
  };
      }]);
