/**
 * Created by tituswoo on 2/17/15.
 */

angular.module('swapr.student').controller('AssignmentCtrl', ['$scope', '$stateParams', 'Assignments', function ($scope, $stateParams, Assignments) {
    $scope.assignment = $scope.$parent.assignment;
    $scope.curView = $scope.$parent.curView;
    console.log("Assignment Ctrl scope:",$scope);
}]);