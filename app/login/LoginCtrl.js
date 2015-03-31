/**
 * Created by Vaughan on 3/30/2015.
 */

angular.module('swapr').controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
    $scope.username = null;
    $scope.password = null;
    console.log("Using login controller!");
    $scope.login = function(username, password) {
        Auth.login({
            username: $scope.username,
            password: $scope.password
        }).then(function () {
            console.log('success');
            $scope.loginError = false;
        }).catch(function () {
            console.log('problem logging in');
            $scope.loginError = true;
        }).finally(function () {
            console.log(Auth.getToken());
        });
    };
}]);
