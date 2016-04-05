/// <reference path="mdContactMaster.js" />
module.controller("authcontroller", function ($scope, $http) {
    var loginmodel = new {
        username: null,
        password: null,
        confirmpassword: null
    };

    $scope.login = function () {
        $http.get("");
        $("#contactview").show();
    };
});