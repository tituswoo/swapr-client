angular.module('swapr').controller('ProfileCtrl', function($scope, Profile) {
    Profile.getProfile().success(function(data) {
        $scope.profile = data;
    });
});
