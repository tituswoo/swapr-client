angular.module('swapr').controller('GradesCtrl', function($scope) {
    $scope.grades = [
        {
            title: 'Lab 1 Video Calibration',
            grade: '89',
            id: '35235897234'
        },
        {
            title: 'Lab 2 Video Calibration',
            grade: '67',
            id: '35115497292'
        }
    ];
});