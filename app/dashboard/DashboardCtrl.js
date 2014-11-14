angular.module('swapr').controller('DashboardCtrl', function ($scope, Grades) {
    Grades.getGrades().success(function (data) {
        $scope.grades = data;
    })
});
