angular.module('swapr').controller('GradesDetailsCtrl', function ($scope, $stateParams) {
    // eventually we want to use $http to get grade object with $stateParams.id.
    // for now let's do dummy stuff.

    $scope.grade = {
        title: 'Lab 1 Video Calibration',
        id: $stateParams.id
    }
});