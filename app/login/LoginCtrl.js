/**
 * Created by Vaughan on 3/30/2015.
 */

angular.module('swapr').controller('LoginCtrl', ['$scope', 'Auth', function ($scope, Auth) {
    $scope.user = {
        username: '',
        password: ''
    };

    $scope.modalLogin = function() {
        Auth.login($scope.user, true)
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
