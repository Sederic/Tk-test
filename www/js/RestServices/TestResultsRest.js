angular.module("RESTServices")

.service('TestResultsRest' , function($http) {

    var TestResultsRest = this;
    TestResultsRest.save = function(test, token) {
        return $http({
            url: "https://backend-1-sederic.c9users.io:8080/api/TestResults/",
            method: 'POST',
            data: test,
            headers: {
           'Authorization': token
            }
       
        });
    };
})
