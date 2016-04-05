/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/jquery-1.10.2.js" />
var angularjscl = angular.module("mymodule", [])
.controller("cnt", function ($scope) {
    //var employee = [{ name: "Nitesh Kumar Mishra" }, { name: "Mamta Kumar Mishra" }, { name: "Aryan Kumar  Mishra" }, { name: "Ku. Aditri Mishra" }, { name: "Vinay Kumar Mishra" }];
    var emp;
    $scope.click = function () {
        $.ajax({
            url: "http://localhost:49460/api/Values",
            dataType: "json",

            type: "get",
            success: function (data) {
                emp = data;
            },
            async:false
        }).then(
            $scope.collection = emp);
    };
});