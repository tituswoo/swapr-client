/**
 * Created by tituswoo on 2/17/15.
 */

angular.module('swapr.student').controller('AssignmentCtrl', ['$scope', '$stateParams', 'Assignments', function ($scope, $stateParams, Assignments) {
    Assignments.getAssignment($stateParams.id).success(function (assignment) {
        $scope.assignment = assignment;
    });
}]);