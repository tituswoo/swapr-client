angular.module('swapr').factory('ajax', ['CONSTANTS', 'Auth', '$http', '$q', function (CONSTANTS, Auth, $http, $q) {
    var factory = {};

    factory.get = function (url) {
        url = CONSTANTS.BASE_URL + url;
        console.log(url);
        return $q(function (resolve, reject) {
            $http({
                method: 'GET',
                url: url,
                headers: {
                    'Authorization': 'Token ' + Auth.getToken()
                }
            }).success(function (data) {
                console.log('success');
                resolve(data);
            }).error(function (e) {
                console.log(Auth.getToken());
                console.log('failed');
                Auth.logout();
                reject(e);
            });
        });
    };

    return factory;
}]);