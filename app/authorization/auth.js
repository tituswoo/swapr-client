/**
 * Created by tituswoo on 3/26/15.
 */

angular.module('swapr').factory('Auth', ['$http', '$q', 'localStorageService', 'CONSTANTS',
    function ($http, $q, localStorageService, CONSTANTS) {

        var token = localStorageService.get('token') || false;
        console.log('token: ' + token);

        var factory = {};
        factory.login = function (user, refresh) {
            refresh = refresh || false;
            return $q(function (resolve, reject) {
                if (token) {
                    resolve(token);
                } else {
                    $http({
                        method: 'POST',
                        url: CONSTANTS.BASE_URL + 'api-token-auth',
                        data: {
                            'username': user.username,
                            'password': user.password
                        }
                    }).success(function (resp) {
                        token = resp.token;
                        localStorageService.set('token', resp.token);
                        if (refresh) location.reload();
                        resolve(token);
                    }).error(function (e) {
                        reject(e);
                    });
                }
            });
        };

        factory.getToken = function () {
            return token || false;
        };

        factory.logout = function (refresh) {
            refresh = refresh || false;
            token = false;
            localStorageService.remove('token');
            if (refresh) location.reload();
        };

        return factory;
    }]);
