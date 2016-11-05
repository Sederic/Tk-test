angular.module("RESTServices", [])

.service("SSFUsersRest", function($http) {

    var SSFUsersRest = this;
    SSFUsersRest.register = function(newUserData) {
        return $http({
            url: "https://backend-1-sederic.c9users.io:8080/api/SSFUsers/",
            method: "POST",
            data: newUserData
        });
    };

    SSFUsersRest.login = function(UserData, token) {
        return $http({
            url: "https://backend-1-sederic.c9users.io:8080/api/SSFUsers/login",
            method: "POST",
            data: UserData
        })
    }

    SSFUsersRest.logout = function(token) {
        return $http({
            url: "https://backend-1-sederic.c9users.io:8080/api/SSFUsers/logout",
            method: "POST",
            headers: {
                Authorization: token
            },
        })
    }

});
