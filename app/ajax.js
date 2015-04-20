angular.module('swapr').factory('ajax', ['CONSTANTS', 'Auth', '$http', '$q', function (CONSTANTS, Auth, $http, $q) {
    var factory = {};

    factory.ajax = function (url, method, params) {
        params = params || {};
        url = CONSTANTS.BASE_URL + url;
        console.log(url);
        console.log(params);
        return $q(function (resolve, reject) {
            var bodyObject;
            if (method === 'GET') {
                bodyObject = {
                    method: method,
                    url: url,
                    headers: {
                        'Authorization': 'Token ' + Auth.getToken()
                    },
                    params: params,
                    cache: true
                };
            } else if (method === 'POST') {
                bodyObject = {
                    method: 'POST',
                    url: url,
                    headers: {
                        'Authorization': 'Token ' + Auth.getToken()
                    },
                    data: params
                };
            } else if (method === 'PUT') {
                bodyObject = {
                    method: 'PUT',
                    url: url,
                    headers: {
                        'Authorization': 'Token ' + Auth.getToken()
                    },
                    data: params
                };
            }

            $http(bodyObject).success(function (data) {
                resolve(data);
            }).error(function (e) {
                console.log(Auth.getToken());
                console.log('failed');
                Auth.logout();
                reject(e);
            });
        });
    };

    factory.get = function (url, params) {
        return factory.ajax(url, 'GET', params);
    };

    factory.post = function (url, data) {
        return factory.ajax(url, 'POST', data);
    };

    factory.put = function (url, data) {
        return factory.ajax(url, 'PUT', data);
    };

    return factory;
}]);