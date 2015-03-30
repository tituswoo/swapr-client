/**
 * Created by tituswoo on 3/29/15.
 */

angular.module('swapr').factory('Users', ['ajax', '$q', function (ajax, $q) {
    var factory = {};

    factory.getUsers = function (courseID) {
        return $q(function (resolve, reject) {
            ajax.get('swaprusers', {
                course: courseID
            }).then(function (users) {
                resolve(users);
            }).catch(function (e) {
                reject(e);
            })
        });
    };

    return factory;
}]);