angular
  .module('mathrixApp.popup')
  .directive('popupInscription',['userStatus','$state', function(userStatus,$state) {
    return {
      restrict: 'A',
      scope : {
        source : '='
      },

      templateUrl : '/partials/directive/popup/inscription.html',

      controller : ['$scope','$element','extFunction','objectMathrix','$analytics','$http','popupService','serviceFacebook',function($scope,$element,extFunction,objectMathrix,$analytics,$http,popupService,serviceFacebook)
      {

        $scope.close = function(){

          popupService.closePopup('inscription');
          $element.remove();
        };
        //Main
        var is_subscribing = false;

        $scope.input_classe_id = userStatus.status.classe_id || userStatus.status.derniere_session_classe_id || objectMathrix.classe[0].id;
        $scope.username = '';
        $scope.email = '';
        $scope.password = '';
        $scope.errorsInscription = {};
        $scope.showFishingBoxInscription = null;
        $scope.classe = objectMathrix.classe;
        $analytics.pageTrack('/inscription');//#analytics


        $scope.go_connexion = function(){
          $scope.close();
          $state.go('login');
        };

        $scope.inscription = function(fishing)
        {
          if(is_subscribing)
          {
            return;
          }
          $analytics.pageTrack('/inscription/termine');//#analytics

          var classe_id;


            classe_id = $scope.input_classe_id;


          if(!extFunction.validateEmail($scope.email)){
            $scope.errorsInscription.email = [];
            $scope.errorsInscription.email[0] = "L'adresse email n'est pas valide.";
            return;
          }

          $http.post('/api/user/signin/normal',{
            username :$scope.username,
            email : $scope.email,
            password : $scope.password,
            classe_id : classe_id,
          }).then(function(object)
        {


          if(object.data.status =='signin_ok')
          {
            userStatus.login(object.data.userData,object.data.token);
            $state.go('startPoint');
            $scope.close();


          }else {
            $scope.errorsInscription = object.data;

          }
          is_subscribing = false;

        },
        //ERROR
        function(){
          errorService.new('Signin echoué');
        }
        );
        };


        $scope.inscriptionFacebook = function()
        {
          $analytics.pageTrack('/inscription/termine');//#analytics

          inscriptionFb();
        };

        var inscriptionFb = function(){
          serviceFacebook.temporaryData.classe_id = $scope.input_classe_id;
          serviceFacebook.facebook1();
        };



    }]
  };
      }]);
