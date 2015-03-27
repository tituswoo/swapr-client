/**
 * Created by tituswoo on 2/5/15.
 */

angular.module('swapr', []);

angular.module('swapr').constant('CONSTANTS', {
    'BASE_URL': 'http://104.236.10.197/'
});

angular.module('swapr').config(['$httpProvider', 'AuthProvider', function ($httpProvider, AuthProvider) {
    $httpProvider.defaults.headers.common.Authorization = 'Token ' + AuthProvider.getToken()
}]);
