'use strict';

/**
 * @ngdoc overview
 * @name moodFrontendApp
 * @description
 * # moodFrontendApp
 *
 * Main module of the application.
 */
angular
  .module('moodFrontendApp', [
    'ngAnimate',
    'ngCookies',
    'ngResource',
    'ngRoute',
    'ngSanitize',
    'ngTouch'
  ])
  .config(function ($routeProvider) {
    $routeProvider
      .when('/home', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/home/:success', {
        templateUrl: 'views/main.html',
        controller: 'MainCtrl',
        controllerAs: 'main'
      })
      .when('/felling', {
        templateUrl: 'views/felling.html',
        controller: 'FeelingCtrl',
        controllerAs: 'felling'
      })
      .when('/why/:id', {
        templateUrl: 'views/why.html',
        controller: 'WhyCtrl',
        controllerAs: 'why'
      })
      .when('/exit/:id', {
        templateUrl: 'views/exit.html',
        controller: 'ExitCtrl',
        controllerAs: 'exit'
      })
      .when('/about', {
        templateUrl: 'views/about.html',
        controller: 'AboutCtrl',
        controllerAs: 'about'
      })
      .otherwise({
        redirectTo: '/home'
      });
  });
