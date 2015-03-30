/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr.admin').controller('CourseCtrl', ['$scope', '$stateParams', 'Courses', 'Assignments', function ($scope, $stateParams, Courses, Assignments) {
    Courses.getCourse($stateParams.id).then(function (course) {
        $scope.course = course;

        Assignments.getAssignments().then(function (assignments) {
            $scope.assignments = assignments;
        });
    });

    $scope.editAssignment = function (a) {
        console.log(a);
        $scope.changeView(a);
    };

    $scope.curView = 'tabView@courses.course';
    $scope.changeView = function (a) {
        if (a.type === 'evaluation') {
            $scope.curView = 'peerReview@courses.course';
        }
    };
    $scope.parentControllerTest = function () {
        alert("Parent controller works");
    };
}]);