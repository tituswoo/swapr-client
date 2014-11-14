'use strict';

angular.module('swapr').factory('Profile', function (CONSTANTS, $http) {
    var getProfile = function () {
        return $http.get(CONSTANTS.BASE_URL + 'profile');
    };

    return {
        getProfile: getProfile
    };
});
