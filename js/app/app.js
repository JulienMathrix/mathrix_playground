angular.module('playgroundApp', ['mathrixApp.popup'])

.run(function($rootScope){
  $rootScope.globalProp = {showModalBackground : false};
});



angular.module('playgroundApp')
.controller('myCtrl',function($scope,popupService){
  $scope.greetings = 'Salut baby';
  $scope.launchDemo = launchDemo;

  function launchDemo(){
    popupService.openPopup($scope,'objectif_atteint');
  }
});
