/// <reference path="contactcontroller.js" />
/// <reference path="serviceContact.js" />
module.factory("serviceContact", function ($http) {

    var serviceContact = {};
    serviceContact.getContacts = function () {
        var contactlist;
        $http.defaults.headers.get = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
        $http.defaults.useXDomain = true;
        return $http.get("http://localhost:49460/api/values");
    };
    serviceContact.savecontact = function (my) {
        var data = null;
        $http.post("http://localhost:49460/api/values", my)

    }
    serviceContact.contactEdit = function (id) {
        return id;
    }
    serviceContact.contactDelete = function (my) {
        var data = null;
        if (confirm("Do you want delete this record")) {
            $http.delete("http://localhost:49460/api/values/" + my.ContactMasterID);
        }

    }
    serviceContact.contactUpdate = function (my) {
        var data = null;
        $http.put("http://localhost:49460/api/values/" + my.ContactMasterID, my);
    }
    serviceContact.contactrefresh = function () {
        var contactlist;
        $http.defaults.headers.get = {
            'Access-Control-Allow-Origin': '*',
            'Access-Control-Allow-Methods': 'GET, POST, PUT, DELETE, OPTIONS',
            'Access-Control-Allow-Headers': 'Content-Type, X-Requested-With'
        };
        $http.defaults.useXDomain = true;
        return $http.get("http://localhost:49460/api/values");
    }

    return serviceContact;

});
