/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr.admin').controller('CourseCtrl', ['$scope', '$stateParams', 'Courses', 'Assignments', function ($scope, $stateParams, Courses, Assignments) {
    Courses.getCourse($stateParams.id).success(function (course) {
        $scope.course = course;
    });

    Assignments.getAssignments().success(function (assignments) {
        $scope.assignments = assignments;
    });
}]);