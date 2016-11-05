angular.module("RESTServices")

.service('QuestionsRest', function ($http){
    var QuestionsRest = this;
    QuestionsRest.getAll =function(token){
        return $http({
         headers: {
             Authorization: token
         },
         url:"https://backend-1-sederic.c9users.io:8080/api/Questions",
         method: "GET"
        })
    }
})