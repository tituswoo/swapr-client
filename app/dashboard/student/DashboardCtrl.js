angular.module('swapr.student').controller('DashboardCtrl', ['$scope', 'Assignments', 'Grades', 'Courses',
    function ($scope, Assignments, Grades, Courses) {
        Assignments.getAssignments().then(function (data) {
            $scope.assignments = data;
        });

        Grades.getGrades().then(function (grades) {
            $scope.grades = grades;
        });

        Courses.getCourses().then(function (courses) {
            $scope.courses = courses;
        });
    }]);
