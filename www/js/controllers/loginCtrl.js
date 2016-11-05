var app = angular.module("starter.controllers");

app.controller("LoginCtrl", ["$scope","$window", "SSFUsersRest", "$state", function($scope, $window, SSFUsersRest, $state) {

            $scope.user = {};
            $scope.signupForm = function(form) {
                if (form.$invalid) return alert("Please fill in all empty boxes before proceeding.");
                SSFUsersRest.login($scope.user)
                    .then(function(response) {
                        $window.localStorage.userID = response.data.userId;
                        $window.localStorage.token = response.data.id;
                        $state.go('lobby');
                        // handle different responses and decide what happens next
                    }, function(error) {
                        // inform the user of any known problems that arose, otherwise give a generic 
                        // failed message
                    });
                  
                    
                };
}]);
