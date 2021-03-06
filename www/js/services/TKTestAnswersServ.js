angular.module('TKTestAnswers', [])
    .service('TKAnswersService', ['$window', 'TestResultsRest', '$http', function($window, TestResultsRest, $http) {
        var service = this;
        var answerCategories = {
            "competing": 0,
            "collaborating": 0,
            "compromising": 0,
            "avoiding": 0,
            "accommodating": 0
        };

        var categoriesStack = [];

        service.getAnswers = function() {
            return answerCategories;
        };

        service.saveAnswer = function(answerCategory) {
            answerCategories[answerCategory.toLowerCase()]++;
            categoriesStack.push(answerCategory);
        };

        service.resetAnswers = function() {
            for (var property in answerCategories) {
                if (answerCategories.hasOwnProperty(property)) {
                    answerCategories[property] = 0;
                }
            }
        };

        service.eraseLastAnswer = function() {
            answerCategories[categoriesStack.pop().toLowerCase()]--;
        };

        service.saveTest = function(test, token) {
            test.userID = $window.localStorage.userID;
            /*       var tempTests = $window.localStorage.tests === undefined ? [] : JSON.parse($window.localStorage.tests);
                   tempTests.push(test);
                   $window.localStorage.tests = JSON.stringify(tempTests); */
            TestResultsRest.save(test, token);

        };

        service.getTests = function() {
            return $http({
           url: "https://backend-1-sederic.c9users.io/api/TestResults?",
           method: "GET"
        })};

        service.setAnswers = function(answers) {
            answerCategories = answers;
        };
    }]);
