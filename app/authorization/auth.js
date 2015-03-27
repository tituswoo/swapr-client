/**
 * Created by tituswoo on 3/26/15.
 */

angular.module('swapr').factory('Auth', ['$http', '$q', 'CONSTANTS', function ($http, $q, CONSTANTS) {
    var token = '';
    var that = this;

    var factory = {};
    factory.login = function (user) {
        return $q(function (resolve, reject) {
            $http({
                method: 'POST',
                url: CONSTANTS.BASE_URL + 'api-token-auth',
                data: {
                    'username': user.username,
                    'password': user.password
                }
            }).success(function (token) {
                that.token = token;
                resolve(token);
            }).error(function (e) {
                that.token = '';
                reject(e);
            });
        });
    };

    return factory;
}]);
