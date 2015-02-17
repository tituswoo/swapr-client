angular.module('swapr.student').controller('DashboardCtrl', ['$scope', 'Assignments', 'Grades', 'Courses', function ($scope, Assignments, Grades, Courses) {
    Assignments.getAssignments().success(function (data) {
        $scope.assignments = data;
    });

    Grades.getGrades().success(function (grades) {
        $scope.grades = grades;
    });

    Courses.getCourses().success(function (courses) {
        $scope.courses = courses;
    });
}]);
