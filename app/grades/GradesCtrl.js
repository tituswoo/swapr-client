angular.module('swapr').controller('GradesCtrl', function($scope, Grades) {
    Grades.getGrades().success(function(data, status) {
        $scope.grades = data;
    });
});
