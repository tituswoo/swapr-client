/**
 * Created by tituswoo on 3/26/15.
 */

angular.module('swapr').provider('Auth', function () {
    var token = '';
    var that = this;

    function factory() {};
    factory.prototype.login = function (user) {
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

    factory.prototype.getToken = function () {
        return that.token || false;
    };

    this.$get = function($http) {
        return ;
    }
});
