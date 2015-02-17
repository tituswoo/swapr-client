angular.module('swapr').controller('DashboardCtrl', ['$scope', 'Assignments', function ($scope, Assignments) {
    Assignments.getAssignments().success(function (data) {
        $scope.grades = data;
    });
}]);
