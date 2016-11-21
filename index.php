<!doctype html>

<html lang="fr" ng-app="playgroundApp">
<head>
  <meta charset="utf-8">

  <title>Mathrix Playground</title>


  <link rel="stylesheet" href="/css/styles.css?v=1.0">




  <script src="/bower_components/angular/angular.min.js"></script>
<script src="/bower_components/angulartics-google-analytics/dist/angulartics-ga.min.js"></script>
<script src="/bower_components/angulartics/dist/angulartics.min.js"></script>

  <!--<script src="/bower_components/angular-ui-router/release/angular-ui-router.min.js"></script>-->
  <script src="/js/app/app.js"></script>

  <script src="/module/popup/module.popup.js"></script>
  <script src="/module/popup/services/popup_service.js"></script>
  <script src="/module/popup/directives/directive_popup_new_rank.js"></script>
  <script src="/module/popup/directives/directive_popup_objectif_atteint.js"></script>
  <script src="/module/popup/directives/directive_popup_inscription.js"></script>
  <script src="/module/popup/directives/directive_popup_changer_mdp.js"></script>
  <script src="/module/popup/directives/directive_popup_changer_email.js"></script>
  <script src="/module/popup/directives/directive_popup_changer_classe_default.js"></script>
  <script src="/module/popup/directives/directive_popup_reload_page.js"></script>
  <script src="/module/popup/directives/directive_popup_invitation_inscription.js"></script>
  <script src="/module/popup/directives/directive_popup_modifier_objectif.js"></script>
  <script src="/module/popup/directives/directive_popup_ask_classe.js"></script>
  <script src="/module/popup/directives/directive_popup_choisir_classe.js"></script>
  <script src="/module/popup/directives/directive_popup_code_premium_valide.js"></script>
  <script src="/module/popup/directives/directive_popup_supprimer_compte.js"></script>


<link rel="stylesheet" href="http://localhost:8888/assets/sass/compiled/app.css">

</head>

<body layout='row'>

  <div id="popup_slot"></div>

  <!--MODAL BACKGROUND-->
<div ng-show='globalProp.showModalBackground' class='mathrix-modal-background animate-opacity'></div>
<!-- FIN MODAL BACKGROUND-->


<h1>PLAYGROUND</h1>
<main ng-controller = 'myCtrl'>
{{greetings}}
<button ng-click='launchDemo()'>Lancer la démo</button>
</main>

</body>

</html>
