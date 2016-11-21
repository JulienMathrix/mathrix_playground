angular
  .module('mathrixApp.popup')
  .directive('popupChangerMdp',['userStatus', function(userStatus) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/changer_mdp.html',

      controller : ['$scope','objectMathrix','$analytics','$state','userStatus','$element','popupService','$http',function($scope,objectMathrix,$analytics,$state,userStatus,$element,popupService,$http)
      {


        //Main
       $scope.old_password = '';
         $scope.new_password = '';
         $scope.new_password_confirm = '';
         $scope.mdp_is_changed = false;
         //Fin Main


        $scope.close = function(){
          $element.remove();
          popupService.closePopup('changer_mdp');
        };



        $scope.changerMotPasse = function()
        {

          if($scope.new_password!=undefined && $scope.new_password.length >=6)
          {
          if($scope.new_password == $scope.new_password_confirm)
          {
            $scope.error_password_message = '';
            $scope.mdp_is_changed = false;

            $http.post('/api/user/password/edit',{
              old_password : $scope.old_password,
              new_password : $scope.new_password
            }).then(function(object)
            {

              if(object.data.success){
                $scope.mdp_is_changed = true;
              }else{
                $scope.error_password_message = object.data.message;
              }

            },function(){
            errorService.new('Changer Mot De passe');
            });

          }
          else {
            $scope.error_password_message = 'Les nouveaux mots de passes sont différents.';
          }
        }
        else {
          $scope.error_password_message = 'Le nouveau mot de passe doit contenir au moins 6 caractères.';
          }
        };


      }]
    };

      }]);
