angular.module('starter.controllers')
.controller('LobbyCtrl',['$scope', 'TKTestQuestionService',
function($scope, TKTestQuestionService) {
TKTestQuestionService.all();
}]);