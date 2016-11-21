angular
  .module('mathrixApp.popup')
  .service('popupService', ['$compile','$rootScope','$location','$analytics', function ($compile,$rootScope,$location,$analytics) {

//Main
var self = this;

this.popup_opened = null;
this.popup_waiting = [];
//Fin Main

this.openPopup = function(scope,nom,params){

    $rootScope.globalProp.showModalBackground = true;

  if(self.popup_opened == null){
    self.popup_opened =nom;
    var popup_slot = document.getElementById('popup_slot');
    console.log(self.getDomElement(nom,params));
    angular.element(popup_slot).append($compile(self.getDomElement(nom,params))(scope));
  }else{
    self.popup_waiting.push({nom : nom, params : params});
  }
};

this.closePopup = function(nom){

self.popup_opened = null;
if(self.popup_waiting.length >0){

  this.openPopup($rootScope,self.popup_waiting[0].nom,self.popup_waiting[0].params);
  self.popup_waiting.splice(0,1);
}
if(self.popup_opened == null){
$rootScope.globalProp.showModalBackground = false;
$analytics.pageTrack($location.url());//#analytics
}

};


this.getDomElement = function(nom,params){

  if(nom == 'ask_classe'){
    return '<div popup-ask-classe></div>';
  }
  if(nom == 'inscription'){
    return '<div popup-inscription></div>';
  }
  else if(nom == 'modifier_objectif'){
    return '<div popup-modifier-objectif></div>';
  }
  else if(nom == 'new_rank'){
    return "<div popup-new-rank rank='"+params.rank+"'></div>";
  }
  else if(nom == 'invitation_inscription'){
    return '<div popup-invitation-inscription></div>';
  }
  else if(nom == 'change_classe'){
    return "<div popup-choisir-classe></div>";
  }
  else if(nom == 'objectif_atteint'){
    return "<div popup-objectif-atteint ></div>";
  }
  else if(nom == 'supprimer_compte'){
    return "<div popup-supprimer-compte ></div>";
  }
  else if(nom == 'code_premium_valide'){
    return "<div popup-code-premium-valide ></div>";
  }
  else if(nom == 'changer_mdp'){
    return "<div popup-changer-mdp ></div>";
  }
  else if(nom == 'changer_email'){
    return "<div popup-changer-email ></div>";
  }
  else if(nom == 'changer_classe_default'){
    return "<div popup-changer-classe-default ></div>";
  }
};
//this.openPopup($rootScope,'change_classe');
//this.openPopup($rootScope,'inscription');

//this.openPopup($rootScope,'ask_classe');
/*this.openPopup($rootScope,'supprimer_compte');
this.openPopup($rootScope,'changer_email');

this.openPopup($rootScope,'invitation_inscription');
this.openPopup($rootScope,'new_rank',{rank : 3});
this.openPopup($rootScope,'modifier_objectif');*/



}]);
