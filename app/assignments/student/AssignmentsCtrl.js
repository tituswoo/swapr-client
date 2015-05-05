/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr.student').controller('AssignmentsCtrl', ['$scope', '$stateParams', 'Assignments', function ($scope, $stateParams, Assignments) {
    //TODO: grab actual course id from student, $stateParams.id is undefined so all assignments are displayed
    var courseId = $scope.courseId || '';
    Assignments.getAssignments(courseId).then(function (assignments) {
        $scope.assignments = assignments;
    });

    $scope.fromNow = function (time) {
        return moment(time).fromNow();
    };

    $scope.friendlyDate = function (time) {
        return moment(time).format('L');
    };

    $scope.chooseAssignment = function (a) {
        $scope.$parent.assignment = a;
        console.log("Assignment chosen in AssignmentCtrl: ",$scope.assignment);
        if (a.type === 'evaluation') {
            $scope.$parent.curView = 'peerReview@assignments.assignment';
        } else if (a.type === 'submission') {
            $scope.$parent.curView = 'videoUpload@assignments.assignment';
        }
        console.log("AssignmentsCtrl $scope.curView: ",$scope.$parent.curView);
    };
}]);