angular.module('swapr').directive('sessionButtons', ['Auth', '$modal', function (Auth, $modal) {
    return {
        restrict: 'A',
        templateUrl: 'authorization/session-buttons/session-buttons-template.html',
        link: function ($scope, elem, attrs) {
            $scope.user = {
                username: '',
                password: ''
            };

            $scope.isLoggedIn = Auth.loggedIn();

            $scope.modalLogin = function() {
                Auth.login($scope.user, true)
                    .then(function () {
                        console.log('Success');
                        $scope.loginError = false;
                        $scope.closeModal();
                    }).catch(function () {
                        console.log('Problem logging in');
                        $scope.loginError = true;
                    }).finally(function () {
                        console.log(Auth.getToken());
                    });
            };

            $scope.closeModal = function () {
                if ($scope.modal) $scope.modal.close();
            };

            $scope.login = function () {
                $scope.modal = $modal.open({
                    templateUrl: 'authorization/session-buttons/loginModal.html',
                    size: 'lg',
                    scope: $scope
                });
            };

            $scope.logout = function () {
                $scope.closeModal();
                Auth.logout(true);
            };
        }
    };
}]);