angular.module('menuDemoDensity', ['ngMaterial']).config(function($mdIconProvider) {
  $mdIconProvider
    .iconSet("call", 'img/icons/sets/communication-icons.svg', 24)
    .iconSet("social", 'img/icons/sets/social-icons.svg', 24);
}).controller('DensityDemoCtrl', function($mdDialog) {
  var ctrl = this;
  ctrl.menuHref = "https://material.io/archive/guidelines/components/menus.html#menus-specs";

  this.announceClick = function(index) {
    $mdDialog.show(
      $mdDialog.alert()
        .title('You clicked!')
        .textContent('You clicked the menu item at index ' + index)
        .ok('Nice')
    );
  };
});
