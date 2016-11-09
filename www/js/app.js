// Ionic Starter App

// angular.module is a global place for creating, registering and retrieving Angular modules
// 'starter' is the name of this angular module example (also set in a <body> attribute in index.html)
// the 2nd parameter is an array of 'requires'
angular.module('starter', ['ionic', 'chart.js', 'TKTestQuestions', 'starter.controllers', 'TKTestAnswers', 'RESTServices', 'TKResultsButton'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if (window.cordova && window.cordova.plugins.Keyboard) {
      // Hide the accessory bar by default (remove this to show the accessory bar above the keyboard
      // for form inputs)
      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);

      // Don't remove this line unless you know what you are doing. It stops the viewport
      // from snapping when text inputs are focused. Ionic handles this internally for
      // a much nicer keyboard experience.
      cordova.plugins.Keyboard.disableScroll(true);
    }
    if (window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider) {
  $urlRouterProvider.otherwise('/');
  $stateProvider
    .state('lobby', {
      url: '/lobby',
      templateUrl: 'templates/lobby.html',
      controller: 'LobbyCtrl'
    })
    .state('question', {
      url: '/question:questionID',
      templateUrl: 'templates/question.html',
      controller: 'QuestionsCtrl',
      resolve: {
        testInfo: function($stateParams, TKTestQuestionService) {
          return TKTestQuestionService.getQuestion($stateParams.questionID);
        }
      }
    })

  .state('results', {
    url: '/results',
    templateUrl: 'templates/result.html',
    controller: 'ResultsCtrl',
    resolve: {
      testInfo: function($stateParams, TKTestQuestionService) {
        return TKTestQuestionService.getQuestion($stateParams.questionID);
      }
    }})

    .state('landing', {
      url: '/',
      templateUrl: "templates/landing.html"
    })
    .state('register', {
      url: '/register',
      templateUrl: 'templates/register.html',
      controller: 'RegisterCtrl'
    })
    .state('login', {
      url: '/login',
      templateUrl: 'templates/login.html',
      controller: 'LoginCtrl'
    })
    
     .state('history', {
       url: '/history',
       templateUrl: 'templates/history.html',
       controller: 'HistoryCtrl',
       resolve: {
         tests: ['TKAnswersService', '$window', function(TKAnswersService, $window) {
           return TKAnswersService.getTests($window.localStorage.userID, $window.localStorage.token)// I added the token here
          .then(function(response){
            //if ()
            console.log(response);
            return response.data;
          })
         }]
         
       }
     });
    
});
