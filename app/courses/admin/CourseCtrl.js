/**
 * Created by tituswoo on 2/16/15.
 */

angular.module('swapr.admin').controller('CourseCtrl', ['$scope', '$stateParams', 'Courses', 'Assignments', 'Users',
    function ($scope, $stateParams, Courses, Assignments, Users) {
        Courses.getCourse($stateParams.id).then(function (course) {
            $scope.course = course;
        });

        Assignments.getAssignments($stateParams.id).then(function (assignments) {
            $scope.assignments = assignments;
        });

        $scope.editAssignment = function (a) {
            $scope.changeView(a);
        };

        $scope.loadStudents = function () {
            // @todo: add option to filter user type. Assume they're all students for now.
            Users.getUsers($stateParams.id).then(function (users) {
                $scope.students = users;
            });
        };

        $scope.curView = 'tabView@courses.course';
        $scope.changeView = function (a) {
            $scope.curCourse = a;
            if (a.type === 'evaluation') {
                $scope.curView = 'peerReview@courses.course';
            } else if (a.type === 'submission') {
                $scope.curView = 'videoUpload@courses.course';
            }
        };
        $scope.parentControllerTest = function () {
            alert("Parent controller works");
        };
    }]);
