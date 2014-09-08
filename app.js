angular.module('sportsApp', ['ui.router'])
.config(function($stateProvider, $urlRouterProvider){
  $stateProvider.state('form.home', {
    url: '/home',
    controller: 'formController',
    templateUrl: 'templates/custom.html'
  })
  .state('form', {
    url: '/form',
    controller: 'formController',
    templateUrl: 'templates/home.html'
  })
  .state('form.custom', {
    url: '/custom',
    controller: 'formController',
    templateUrl: 'templates/custom.html'
  })

  $urlRouterProvider.otherwise('/form');
})
.controller('formController', function($scope, $location){
  $scope.goNext = function(){
    console.log($scope.choice)
    if ($scope.choice === 'custom') {
      $location.path('/form/custom')
    }
  }
})
