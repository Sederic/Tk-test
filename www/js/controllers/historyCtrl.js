angular.module('starter.controllers')
    .controller('HistoryCtrl', ['$scope', '$window', '$state', 'tests', 'TKAnswersService', 'TKResultsButtonService', 'TestResultsRest',
        function($scope, $window, $state, tests, TKAnswersService, TKResultsButtonService, TestResultsRest) {
            $scope.tests = tests === undefined ? [] : tests;

            $scope.goToResult = function(test) {

                var answers = {
                    "competing": test.competing,
                    "collaborating": test.collaborating,
                    "compromising": test.compromising,
                    "avoiding": test.avoiding,
                    "accommodating": test.accommodating
                };

                TKAnswersService.setAnswers(answers);
                TKResultsButtonService.setShouldShowMenuButton(false);
                $state.go('results');
            };

            TestResultsRest.find($window.localStorage.token);
        }
    ]);
