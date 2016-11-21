angular
  .module('mathrixApp.popup')
  .directive('popupChangerClasseDefault',['userStatus', function(userStatus) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/changer_classe_default.html',

      controller : ['$scope','userStatus','$analytics','$state','userStatus','$element','popupService','$http','extFunction','errorService','objectMathrix',function($scope,userStatus,$analytics,$state,userStatus,$element,popupService,$http,extFunction,errorService,objectMathrix)
      {
        //Main

         //Fin Main

         $scope.changeClasseDefault = function(classe_id){
           $http.post('/api/user/classe/edit',{
             classe_id : classe_id
           }).then(function(object){
             if(object.data.success){
               userStatus.set('classe_id',classe_id);
               $scope.refreshUserClasse();
               $state.go('dashboard',{urlDoublet : 'maths-fr', urlClasse : objectMathrix.getClasse(classe_id).url});
               $scope.close();
             }
           });

         };

         $scope.ensembleClasse = objectMathrix.classe;

        $scope.close = function(){
          $element.remove();
          popupService.closePopup('changer_classe_default');
        };



      }]
    };

      }]);
