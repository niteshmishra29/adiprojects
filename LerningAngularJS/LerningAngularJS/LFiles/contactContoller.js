/// <reference path="mdContactMaster.js" />

module.controller("myControler", function ($scope, serviceContact) {
    var myname =
        {
            ContactMasterID: 0,
            FirstName: null,
            LastName: null,
            Gender: null
        }
    $scope.myname = myname;
    var myservice = serviceContact.getContacts().then(function (result) {
        $scope.collectionemp = result.data
    });
    $scope.save = function (data) {
        if (data.ContactMasterID == 0) {
            serviceContact.savecontact(data);
        }
        else {
            serviceContact.contactUpdate(data);
        }

        $("#addblock").hide();

    }
    $scope.delete = function (data) {
        serviceContact.contactDelete(data);
        $("#addblock").hide();

    }
    $scope.edit = function (data) {
        $("#addblock").show();
        $scope.myname = serviceContact.contactEdit(data);

        $scope.new = function (myname) {
            myname.ContactMasterID = 0;
            myname.FirstName = null;
            myname.LastName = null;
            myname.Gender = null;
            $("#addblock").show();
        }

    }
});