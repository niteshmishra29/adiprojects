/// <reference path="../Scripts/angular.js" />
/// <reference path="../Scripts/jquery-1.10.2.js" />
var app = angular.module("mymodeul", [])
.controller("ancontoller", function ($scope) {
    var model = null;
    $scope.click = function () {
        $.ajax({
            url: "http://localhost:49460/api/Values",
            dataType: "json",
            type: "get",
            success: function (data) {
                model = data;
                $scope.employees = data;
            },
            error: function () {
                alert("Error Occured");
            },
            async: false
        }).complete(function ()
        { $scope.employees = model; })
    };
}
);