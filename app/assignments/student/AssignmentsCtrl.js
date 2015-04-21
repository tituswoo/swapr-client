/**
 * Created by Vaughan on 10/24/2014.
 */
angular.module('swapr.student').controller('AssignmentsCtrl', ['$scope', '$stateParams', 'Assignments', function ($scope, $stateParams, Assignments) {
    Assignments.getAssignments().then(function (assignments) {
        $scope.assignments = assignments;
    });

    $scope.fromNow = function (time) {
        return moment(time).fromNow();
    };

    $scope.friendlyDate = function (time) {
        return moment(time).format('L');
    };
}]);