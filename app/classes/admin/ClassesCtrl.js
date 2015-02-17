angular.module('swapr.admin').controller('ClassesCtrl', ['$scope', 'Courses', function ($scope, Courses) {
    Courses.getCourses().success(function (courses) {
        $scope.courses = courses;
    });
}]);