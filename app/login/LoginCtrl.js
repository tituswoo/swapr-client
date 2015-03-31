/**
 * Created by Vaughan on 3/30/2015.
 */

angular.module('swapr').controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
    $scope.username = null;
    $scope.password = null;
    console.log("Using login controller!");
    $scope.modalLogin = function(username, password) {
        console.log(username, password);
        Auth.login({
            username: username,
            password: password
        }, true)
            .then(function () {
            console.log('Success');
            $scope.loginError = false;
            $scope.closeLoginModal();
        }).catch(function () {
            console.log('Problem logging in');
            $scope.loginError = true;
        }).finally(function () {
            console.log(Auth.getToken());
        });
    };
}]);
