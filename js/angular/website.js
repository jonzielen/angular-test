angular.module('website', ['ngRoute']).
  config(function($routeProvider) {
    $routeProvider.
      when('/', {templateUrl:'partials/home.html', controller:'MainCtrl'}).
      when('/test', {templateUrl:'partials/test.html'}).
      otherwise({redirectTo:'/404error', templateUrl:'partials/error.html'});
  }).
  controller('MainCtrl', function ($scope) {
    $scope.title = 'Home Page';
    $scope.body = 'This is the home page body';
  });
