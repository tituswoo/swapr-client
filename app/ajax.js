angular.module('swapr').factory('ajax', ['CONSTANTS', 'Auth', '$http', '$q', function (CONSTANTS, Auth, $http, $q) {
    var factory = {};

    factory.get = function (url, params) {
        params = params || {};
        url = CONSTANTS.BASE_URL + url;
        console.log(url);
        console.log(params);
        return $q(function (resolve, reject) {
            $http({
                method: 'GET',
                url: url,
                headers: {
                    'Authorization': 'Token ' + Auth.getToken()
                },
                params: params,
                cache: true
            }).success(function (data) {
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