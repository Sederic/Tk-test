var app = angular.module("starter.controllers");

app.controller("RegisterCtrl", ["$scope","$window", "SSFUsersRest", "$state", function($scope, $window, SSFUsersRest, $state) {

            $scope.user = {};
            $scope.signupForm = function(form) {
                if (form.$invalid) return alert("Please complete the form before proceeding.");
                SSFUsersRest.register($scope.user)
                    .then(function(response) {
                        $window.localStorage.userID = response.data.id;
                        $window.localStorage.token = response.data.token;
                        $state.go('lobby');
                        // handle different responses and decide what happens next
                    }, function(error) {
                        // inform the user of any known problems that arose, otherwise give a generic 
                        // failed message
                    });
                  
                    
                };
}]);

