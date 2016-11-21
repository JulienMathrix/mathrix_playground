angular
  .module('mathrixApp.popup')
  .directive('popupChangerEmail',['userStatus', function(userStatus) {
    return {
      restrict: 'A',

      templateUrl : '/partials/directive/popup/changer_email.html',

      controller : ['$scope','objectMathrix','$analytics','$state','userStatus','$element','popupService','$http','extFunction','errorService',function($scope,objectMathrix,$analytics,$state,userStatus,$element,popupService,$http,extFunction,errorService)
      {


        //Main
        $scope.email_is_changed = false;
        $scope.new_email = '';
        $scope.error_email_message = undefined;
         //Fin Main


        $scope.close = function(){
          $element.remove();
          popupService.closePopup('changer_email');
        };


        $scope.changerEmail = function(){
        $scope.error_email_message = '';
        $scope.email_is_changed = false;


        if(!extFunction.validateEmail($scope.new_email)){
          $scope.error_email_message = "Cette adresse email semble invalide.";
          return;
        }
          $http.post('/api/user/email/edit',{
            new_email : $scope.new_email
          }).then(function(object)
          {

            if(object.data.success){
              userStatus.set('email',$scope.new_email);
              $scope.user_email = $scope.new_email;

              $scope.email_is_changed = true;
            }else{
              $scope.error_email_message = object.data.message;
            }
        },function(){
        errorService.new('Changer Email');
        });
        };


      }]
    };

      }]);
