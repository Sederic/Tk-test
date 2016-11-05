angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService', '$state', 'TKAnswersService', '$window',
function($scope, TKTestQuestionService,$state, TKAnswersService) {
TKTestQuestionService.all();
 $scope.goToTest = function()
   {
        TKAnswersService.resetAnswers();
           $state.go('question',{questionID:1});
   };
   $scope.goToLanding = function()
   {
      $state.go('landing'); 
    };
}]);